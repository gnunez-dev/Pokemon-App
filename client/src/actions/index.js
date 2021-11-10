import { GET_POKEMONS, FILTER_ORDER, FILTER_ORDER_ATTACK, FILTER_TYPE, FILTER_ORIGIN, GET_TYPES, GET_POKEMON_ID, GET_POKEMON_NAME, ADD_POKEMON, GET_POKEMON_DETAILS_CARRUSEL, CLEAN_POKEMON_ID } from "./constants";
import axios from "axios"

//La acción es simplemente para despachar un tipo



//GET
export const getPokemons = () => {

    return dispatch => {
        return axios.get('http://localhost:3001/pokemons')
            .then( pokemons => dispatch( {type: GET_POKEMONS, payload: pokemons.data} ))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los pokemones', error}})
    }

}

export const getTypes = () => {

    return dispatch => {
        return axios.get('http://localhost:3001/types')
            .then( types => dispatch( {type: GET_TYPES, payload: types.data} ))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los types', error}})
    }

}

export const getPokemonByName = (name) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/pokemons/?name=${name}`)
            .then( pokemonName => dispatch( { type: GET_POKEMON_NAME, payload: pokemonName.data } ))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los resultados de la busqueda', error}})
    }
}


export const getPokemonById = (id) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/pokemons/${id}`)
            .then( pokemonID => dispatch({type: GET_POKEMON_ID, payload: pokemonID.data}))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los resultados de la busqueda', error}})
    }
}

export const getPokemonCarrusel = (id) => {
    return dispatch => {
        return axios.get(`http://localhost:3001/pokemons/related/${id}`)
        .then( related => dispatch({type: GET_POKEMON_DETAILS_CARRUSEL, payload: related.data}))
        .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los pokemon relacionados', error}})
    }
}


//FILTERS

export const filterPokemonsByOrden = (orden) => {
    
    return { type: FILTER_ORDER, payload: orden }

}
export const filterPokemonsByOrdenAttack = (orden) => {
    
    return { type: FILTER_ORDER_ATTACK, payload: orden }

}

export const filterPokemonsByType = (type) => {

    return { type: FILTER_TYPE, payload: type }

}

export const filterPokemonsFrom = (from) => {

    return { type: FILTER_ORIGIN, payload: from }

}


//CREATE 

export const createPokemon = (newPokemon) => {
    return dispatch => {
        return axios.post('http://localhost:3001/pokemons', newPokemon)
            .then( newPokemon => dispatch({type:ADD_POKEMON, payload: newPokemon.data}) )
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de crear el nuevo pokemon', error}})
    }
}

export const clearPokemonId = () => {
    return { type: CLEAN_POKEMON_ID, payload: {} }
}