import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, filterPokemonsByOrden, filterPokemonsFrom, filterPokemonsByType  } from '../../actions/index';
import usePagination from '../../hooks/usePagination';
import Loading from '../../img/ball-triangle.svg';
import Pagination from '../Pagination/Pagination.js'
import Filters from '../Filters/Filters';
import './Home.css'

const Home = () => {

    let dispatch = useDispatch(); 
    let pokemons = useSelector( state => state.pokemonsList ) //Con esto se toman los pokemons del state
    let [currentPokemons, pokemonsPerPage, handlePaginate] = usePagination({pageNumber:1, pokemons, numberPerPage: 12}); // con esto tomamos la info del hook creado para manejar la paginación
    let [orden, setOrden] = useState('');

    useEffect( () => {
        console.log('useEffect')
        dispatch(getPokemons())
    }, [dispatch]);

    const handleChageOrder = (e) => {
      dispatch(filterPokemonsByOrden(e.target.value));
      handlePaginate(1)
      setOrden(`Orden ${e.target.value}`)

    }

    const handleChageTypes = (e) => {
      dispatch( filterPokemonsByType(e.target.value) )

    }

    

  return (
    <div>

      <nav className='filters'>
        <ul>
            <li key="orden">
                <label>Ordernar</label>
                <select onChange={ (e) => handleChageOrder(e)}>
                    <option value="Random">Random</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </li>
            <li key="types">
                <label>Types</label>
                <select onChange={ (e) => handleChageTypes(e)} >
                    <option value="normal">normal</option>
                    <option value="All">All</option>
                </select>
            </li>
        </ul>
      </nav>
      <h1>Pokemons</h1>


      { pokemons.length !== 0 ? 

        <div>
        <ul className='container-pokemons'>
        { currentPokemons && currentPokemons.map( p => {
            return(
                <li key={p.id}>
                  <div className="pokemon-img">
                    <img src={p.image} alt={p.name}/>
                  </div>
                  <div className="pokemon-info">
                    <h3>{p.name}</h3>
                    <div className="pokemon-type">
                      { p.types && p.types.map( t => {
                        return (
                          <span>{t}</span>
                        )
                      })}
                    </div>
                    <ul className="pokemon-stats">
                      <li>Life: {p.hp}</li>
                      <li>Attack: {p.attack}</li>
                      <li>Defense: {p.defense}</li>
                      <li>Speed: {p.speed}</li>
                      <li>Weight: {p.weight}</li>
                      <li>Height: {p.height}</li>
                    </ul>
                  </div>
      
                </li>
                
            )
        })}   


        </ul>
        <Pagination
          pokemonsPerPage={pokemonsPerPage}
          totalPokemons={pokemons.length}
          handlePaginate={handlePaginate}

        />
        </div>
        : 

        <img src={Loading}/>
      
      }
    </div>
  ) 
};

export default Home;