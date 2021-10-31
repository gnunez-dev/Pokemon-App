import { GET_POKEMONS, FILTER_ORDER, FILTER_ORDER_ATTACK, FILTER_TYPE, FILTER_FROM, GET_TYPES, GET_POKEMON_ID, GET_POKEMON_NAME, ADD_POKEMON } from "./constants";
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
    console.log('accion', name)
    return dispatch => {
        return axios.get(`http://localhost:3001/pokemons?name=${name}`)
            .then( pokemonName => dispatch( { type: GET_POKEMON_NAME, payload: pokemonName.data } ))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los resultados de la busqueda', error}})
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

    return { type: FILTER_FROM, payload: from }

}