import {GET_POKEMONS, GET_POKEMONS_ID, GET_POKEMONS_NAME, ADD_POKEMON} from "./constants";
import axios from "axios"

export function getPokemons() {

    return function (dispatch) {
        return axios.get('http://localhost:3001/pokemons')
            .then( pokemons => dispatch( {type: GET_POKEMONS, payload: pokemons.data} ))
            //.catch( error => { return {msg: 'Ha ocurrido un error al tratar de optener los pokemones', error}})
    }

}
/* export function getPokemons(){
    return function(dispatch){
      return fetch('http://localhost:3001/pokemons')
            .then( response => response.json())
            .then(json => dispatch({type: GET_POKEMONS, payload: json }))
           
    }
  } */