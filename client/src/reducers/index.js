import {GET_POKEMONS, GET_POKEMONS_ID, GET_POKEMONS_NAME, ADD_POKEMON} from "../actions/constants";


const initialState = {
    pokemonsList: [],
    pokemonsId : {},
    pokemonsName : {}
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){

        case GET_POKEMONS:
            console.log('state_pokemons')
            return{
                ...state, 
                pokemonsList: action.payload
            }
        default:
            return {...state}

    }

}