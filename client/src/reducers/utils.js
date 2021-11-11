export const ordenPokemons = ( state, payload ) => {
    console.log('reducer orden', state.pokemonsList)
    if( payload === 'asc'){

        return state.pokemonsList.sort( (a, b) => {
            if( a.name.toLowerCase() > b.name.toLowerCase() ) return 1
            if( b.name.toLowerCase() > a.name.toLowerCase() ) return -1
            return 0
        })

    } else if( payload === 'desc' ){

        return state.pokemonsList.sort( (a, b) => {
            if( a.name.toLowerCase() > b.name.toLowerCase() ) return -1
            if( a.name.toLowerCase() > b.name.toLowerCase() ) return 1
            return 0
        });

    } else {

        return state.pokemonsList.sort( (a, b) => {
            if( a.name.toLowerCase() > Math.random() ) return -1
            if( b.name.toLowerCase() > Math.random() ) return 1
            return 0
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

        return state.allPokemons.filter( p => p.types.includes(payload.toLowerCase()) )

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

