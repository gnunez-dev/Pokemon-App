import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions/index';
import usePagination from '../../hooks/usePagination';
import Loading from '../../img/ball-triangle.svg';
import Pagination from '../Pagination/Pagination.js'
import './Home.css'

const Home = () => {

    let dispatch = useDispatch(); 
    let pokemons = useSelector( state => state.pokemonsList ) //Con esto se toman los pokemons del state
    let [currentPokemons, pokemonsPerPage, handlePaginate] = usePagination({pageNumber:1, pokemons, numberPerPage: 12}); // con esto tomamos la info del hook creado para manejar la paginación
    

    useEffect( () => {
        console.log('useEffect')
        dispatch(getPokemons())
    }, [dispatch]);

    

  return (
    <div>
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