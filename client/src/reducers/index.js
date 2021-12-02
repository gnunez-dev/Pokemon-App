import { SEARCH_TYPE, GET_POKEMONS, FILTER_ORDER, FILTER_ORDER_ATTACK, FILTER_TYPE, FILTER_ORIGIN, GET_TYPES, GET_POKEMON_ID, GET_POKEMON_NAME, ADD_POKEMON, GET_POKEMON_DETAILS_CARRUSEL, CLEAN_POKEMON_ID } from "../actions/constants";
import { ordenPokemons, ordenPokemonsAttack, pokemonsFilterType, pokemonsFilterOrigin } from './utils'

const initialState = {
    pokemonsList: [], // se guardan los pokemons que se van a mostrar. En princpio estan todo, luego va depender de los filtros activos.
    allPokemons: [], // Se guardan todos los pokemons, en base a este se hacen los filtros para setear a pokemonsList
    allTypes: [],
    pokemonId : {}, 
    pokemonName : {},
    noHayResultados: false,
    pokemonsCarrusel : []

}

export default function rootReducer(state = initialState, action) {

    switch(action.type){

        case GET_POKEMONS:
            
            return {
                ...state, 
                allPokemons: action.payload,
                pokemonsList: action.payload,
                noHayResultados: action.payload.length > 0 ? false : true
            }

        case FILTER_ORDER:

            return {
                ...state,
                pokemonsList: ordenPokemons(state, action.payload)

            }

        case FILTER_ORDER_ATTACK:

            return {
                ...state,
                pokemonsList: ordenPokemonsAttack(state, action.payload)
            }

        case FILTER_TYPE:

            const filterResultType = pokemonsFilterType(state, action.payload)
            return {
                ...state,
                pokemonsList: filterResultType,
                noHayResultados: filterResultType.length > 0 ? false : true
            }
        
        case FILTER_ORIGIN:

            const filterResultOrigin = pokemonsFilterOrigin(state, action.payload)
            return {
                ...state,
                pokemonsList: filterResultOrigin,
                noHayResultados: filterResultOrigin.length > 0 ? false : true
            }

        case GET_TYPES:

            return {
                ...state,
                allTypes: action.payload
            }
        
        case GET_POKEMON_NAME:

            return {
                ...state,
                pokemonsList: action.payload,
                noHayResultados: action.payload.length > 0 ? false : true
            }

        case GET_POKEMON_ID:

            return {
                ...state,
                pokemonId: action.payload
            }

        case ADD_POKEMON:

            return {
                ...state
            }

        case GET_POKEMON_DETAILS_CARRUSEL:
            
            return {
                ...state,
                pokemonsCarrusel: action.payload
            }

        case CLEAN_POKEMON_ID: 

            return {
                ...state,
                pokemonId: action.payload
            }

        case SEARCH_TYPE:

            return{
                ...state,
                pokemonsList: pokemonsFilterType(state, action.payload)
            }
        default:

            return { ...state }

    }

}