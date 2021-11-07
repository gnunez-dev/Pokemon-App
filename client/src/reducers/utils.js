export const ordenPokemons = ( state, payload ) => {
    
    if( payload === 'asc'){

        return state.pokemonsList.sort( (a, b) => {
            if( a.name > b.name ) return 1
            if( b.name > a.name ) return -1
            return 0
        })

    } else if( payload === 'desc' ){

        return state.pokemonsList.sort( (a, b) => {
            if( a.name > b.name ) return -1
            if( a.name > b.name ) return 1
            return 0
        });

    } else {

        return state.pokemonsList.sort( (a, b) => {
            return 0.5 - Math.random
        });

    } 
}


export const ordenPokemonsAttack = (state, payload) => {

    if(payload === 'asc'){

        return state.pokemonsList.sort( (a, b) => {
            if( a.attack > b.attack ) return 1
            if( b.attack > a.attack ) return -1
            return 0
        })

    } else {
        
        return state.pokemonsList.sort( (a, b) => {
            if( a.attack > b.attack ) return -1
            if( a.attack > b.attack ) return 1
            return 0
        });

    }

}



export const pokemonsFilterType = (state, payload) => {
    
    if( payload === 'all' ){

        return state.allPokemons
        
    } else {

        return state.allPokemons.filter( p => p.types.includes(payload) )

    }

}


export const pokemonsFilterOrigin = (state, payload) => {

    if( payload === 'existentes'){

        return state.allPokemons.filter( p => typeof p.id === 'number')

    } else if( payload === 'creados'){

        return state.allPokemons.filter( p => typeof p.id !== 'number')

    } else {
        
        return state.allPokemons

    }

}
