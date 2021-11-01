import Pokemon from '../Pokemon/Pokemon'
import Pagination from '../Pagination/Pagination.js'
import './Pokemons.css';

const Pokemons = ({pokemonsLength, currentPokemons, pokemonsPerPage, handlePaginate}) => {

    return(
        <div>
            <div className='container-pokemons'>
                { currentPokemons && currentPokemons.map( p => {
                    return(
                    
                    <Pokemon 
                        id={p.id} 
                        image={p.image}
                        name={p.name}
                        types={p.types}
                    />
                        
                    )
                })}   

            </div>
            <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={pokemonsLength}
            handlePaginate={handlePaginate}
            />
        </div>
    )

}

export default Pokemons;