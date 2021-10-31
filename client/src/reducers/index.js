import { GET_POKEMONS, FILTER_ORDER, FILTER_TYPE, FILTER_FROM, GET_POKEMON_ID, GET_POKEMON_NAME, ADD_POKEMON } from "../actions/constants";


const initialState = {
    pokemonsList: [], // se guardan los pokemons que se van a mostrar. En princpio estan todo, luego va depender de los filtros activos.
    allPokemons: [], // Se guardan todos los pokemons, en base a este se hacen los filtros para setear a pokemonsList
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

        case FILTER_TYPE:

            const pokemonsFilters = state.allPokemons.filter( p => p.types.includes(action.payload) ) 

            const filterPokemons = action.payload === 'All' ? state.allPokemons : pokemonsFilters
            

            return {
                ...state,
                pokemonsList: filterPokemons
            }
        
        case FILTER_FROM:

            const pokemonsFrom = state.pokemonsList.filter( p => p.id && typeof p.id === 'Number')

            const pokemonsFilterFrom = action.payload === 'All' ? state.pokemonsList : pokemonsFrom

            return {
                ...state,
                pokemonsList: pokemonsFilterFrom
            }

        default:
            return { ...state }

    }

}