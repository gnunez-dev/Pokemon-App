import Pokemon from '../Pokemon/Pokemon'
import Pagination from '../Pagination/Pagination.js'
import './Pokemons.css';

const Pokemons = ({pokemonsLength, currentPokemons, pokemonsPerPage, handlePaginate, currentPage}) => {

    return(
        <div className='cont-pokemons'>
            <h1>Pokemon</h1>
            <span>Total Result: { pokemonsLength}</span>
            <div className='pokemons'>
                { currentPokemons && currentPokemons.map( p => {
                    return(
                    
                    <Pokemon 
                        key={p.id}
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
                currentPage={currentPage}
            />
        </div>
    )

}

export default Pokemons;