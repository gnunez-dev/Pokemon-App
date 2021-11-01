import { GET_POKEMONS, FILTER_ORDER, FILTER_ORDER_ATTACK, FILTER_TYPE, FILTER_FROM, GET_TYPES, GET_POKEMON_ID, GET_POKEMON_NAME, ADD_POKEMON } from "../actions/constants";


const initialState = {
    pokemonsList: [], // se guardan los pokemons que se van a mostrar. En princpio estan todo, luego va depender de los filtros activos.
    allPokemons: [], // Se guardan todos los pokemons, en base a este se hacen los filtros para setear a pokemonsList
    allTypes: [],
    pokemonId : {}, 
    pokemonName : {}
}

export default function rootReducer(state = initialState, action) {

    switch(action.type){

        case GET_POKEMONS:
            
            return {
                ...state, 
                allPokemons: action.payload,
                pokemonsList: action.payload
            }

        case FILTER_ORDER:

            const ordenPokemons = action.payload === 'asc' 
                ? 
                    state.pokemonsList.sort( (a, b) => {
                        if( a.name > b.name ) return 1
                        if( b.name > a.name ) return -1
                        return 0
                    })
                :
                    state.pokemonsList.sort( (a, b) => {
                        if( a.name > b.name ) return -1
                        if( a.name > b.name ) return 1
                        return 0
                    });

            return {
                ...state,
                pokemonsList: ordenPokemons

            }
        case FILTER_ORDER_ATTACK:

            const ordenPokemonsAttack = action.payload === 'asc' 
            ? 
                state.pokemonsList.sort( (a, b) => {
                    if( a.attack > b.attack ) return 1
                    if( b.attack > a.attack ) return -1
                    return 0
                })
            :
                state.pokemonsList.sort( (a, b) => {
                    if( a.attack > b.attack ) return -1
                    if( a.attack > b.attack ) return 1
                    return 0
                });

            return {
                ...state,
                pokemonsList: ordenPokemonsAttack
            }
        case FILTER_TYPE:

            const pokemonsFilters = state.allPokemons.filter( p => p.types.includes(action.payload) ) 
            const filterPokemons = action.payload === 'All' ? state.allPokemons : pokemonsFilters
            

            return {
                ...state,
                pokemonsList: filterPokemons
            }
        
        case FILTER_FROM:

            const pokemonsFrom = action.payload === 'existentes' ? state.allPokemons.filter( p => p.id && typeof p.id === 'number') : state.allPokemons.filter( p => p.id && typeof p.id !== 'number')
            const pokemonsFilterFrom = action.payload === 'All' ? state.allPokemons : pokemonsFrom

            return {
                ...state,
                pokemonsList: pokemonsFilterFrom
            }

        case GET_TYPES:

            return {
                ...state,
                allTypes: action.payload
            }
        
        case GET_POKEMON_NAME:
            console.log('reducer name', action.payload)
            return {
                ...state,
                pokemonsList: action.payload
            }

        case ADD_POKEMON:
            return {
                ...state,
                pokemonsList: state.pokemonsList.concat(action.payload),
                allPokemons: state.allPokemons.concat(action.payload)
            }

        default:
            return { ...state }

    }

}