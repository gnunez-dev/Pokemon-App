const {Pokemon, Type} = require('../db');
const { API_ENDPOINT } = process.env;
const axios = require('axios');


//filtra types de la consulta de la api
const filterTypeApi = ( types ) => {
    return types.map( t => t.type.name)
}


//consulta a la api, trae todos los pokemons
//puse como limite 40 pokemons
const queryApi = async () =>{

    try{

        //Petición a la api,
        //este endpoint trae la url donde estan los datos de cada pokemon
        let query = await axios({
            method: 'get',
            url: `${API_ENDPOINT}pokemon?offset=0&limit=40`,
        });

        //esto entra a cada pokemon
        let listPromesas =  query.data.results.map( async (p) => {

            let  qPokemon = await axios({
                method: 'get',
                url: p.url
            })

            return qPokemon;

        });

        let listWithoutFilter = await Promise.all(listPromesas)
    
        //trae solo la info que queremos
        let listF = listWithoutFilter.map( p => {
            return {
                id: p.data.id,
                name: p.data.name,
                hp: p.data.stats[0].base_stat,
                attack: p.data.stats[1].base_stat,
                defense: p.data.stats[2].base_stat,
                speed: p.data.stats[5].base_stat,
                height: p.data.height,
                weight: p.data.weight,
                image: p.data.sprites.other.dream_world.front_default,
                types: filterTypeApi(p.data.types)
            }
        });

        return listF;

    } catch( error ){

        return {msg: 'error en la función', error};

    }

}

const getPokemons = async (query) => {
     
    let listApi = await queryApi();
    let listDbQuery = await Pokemon.findAll({include: Type})
    let listDb = listDbQuery.map( p =>{ 
        return {
            id: p.dataValues.id,
            name:  p.dataValues.name,
            hp: p.dataValues.hp,
            attack: p.dataValues.attack,
            defense: p.dataValues.defense,
            speed: p.dataValues.speed,
            height: p.dataValues.height,
            weight: p.dataValues.weight,
            image: p.dataValues.image, 
            types: p.dataValues.types.map( t => t.name)

        }
    });
    let listPokemon = listDb.concat(listApi);

    if( query === 'api') return listApi;
    if( query === 'db') return listDb;
    return listPokemon;

}

const getPokemonById = async ( id ) => {

    let listPokemons = await getPokemons();
    let idGet;
    if(id.length > 3 ){
        idGet = id
    } else {
        idGet = Number(id)
    }
    let pokemon = listPokemons.filter( p => p.id === idGet);
    return pokemon[0];

}

const getPokemonByName = async ( name ) => {

    let listPokemons = await getPokemons();
    let pokemon = listPokemons.filter( p => p.name.toLowerCase() === ( name.toLowerCase() ));
    return pokemon;

}
const getTypes = async () => {

    try{

        let typesQ = await Type.findAll({attributes: ['id', 'name']});
        if( typesQ.length < 1 ){

            let query = await axios({
                method: 'get',
                url: `${API_ENDPOINT}type`,
            });
            let listTypes = query.data.results.map( t => Type.create( { name: t.name })) 
            await Promise.all(listTypes);
            typesQ = await Type.findAll({attributes: ['id', 'name']});

        }
        let types = typesQ.map( t => t.dataValues)
        return types;

    } catch(error){
        return error
    }
    
}


const getPokemonsRelated = async (id) => {
    
    try{

        let idGet;
        if(id.length > 3 ){
            idGet = id
        } else {
            idGet = Number(id)
        }

        let listado = await getPokemons();
        let pokemonSelected = listado.filter( p => p && p.id === idGet)
        let related = [];
        let relatedId = []

        for (let i = 0; i < listado.length; i++){

            for( let j = 0; j < pokemonSelected[0].types.length; j++){

                if( listado[i].types.includes(pokemonSelected[0].types[j]) && listado[i].id !== idGet && !relatedId.includes(listado[i].id) ){
                    related.push( listado[i] )
                    relatedId.push( listado[i].id ) 
                }

            }

        }
        
        return related;

    } catch(error) {
        return error;
    }

}

const createPokemon = async ( obj ) => {

    let {name, hp, attack, defense, speed, height, weight, image, types } = obj;
    let newPokemon = await Pokemon.create({name, hp, attack, defense, speed, height, weight, image});
    await newPokemon.addTypes(types);
    return newPokemon
}


module.exports = {
    getPokemons,
    getPokemonById,
    getPokemonByName,
    getTypes,
    getPokemonsRelated,
    createPokemon
}