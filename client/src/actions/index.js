import { GET_POKEMONS, FILTER_ORDER, FILTER_TYPE, FILTER_FROM, GET_POKEMON_ID, GET_POKEMON_NAME, ADD_POKEMON } from "./constants";
import axios from "axios"

//La acción es simplemente para despachar un tipo

export const getPokemons = () => {

    return dispatch => {
        return axios.get('http://localhost:3001/pokemons')
            .then( pokemons => dispatch( {type: GET_POKEMONS, payload: pokemons.data} ))
            .catch( error => { return {msg: 'Ha ocurrido un error al tratar de obtener los pokemones', error}})
    }

}

export const filterPokemonsByOrden = (orden) => {
    
    console.log('action', orden)
    return { type: FILTER_ORDER, payload: orden }

}

export const filterPokemonsByType = (type) => {

    return { type: FILTER_TYPE, payload: type }

}

export const filterPokemonsFrom = (from) => {

    return { type: FILTER_FROM, payload: from }

}