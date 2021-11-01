import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../actions/index';
import usePagination from '../../hooks/usePagination';
import Nav from '../Nav/Nav';
import Loading from '../../img/ball-triangle.svg';
import Pokemons from '../Pokemons/Pokemons';
import Filters from '../Filters/Filters';
import Container from '../Container/Container';

import './Home.css'

const Home = () => {

  let dispatch = useDispatch(); 
  let pokemons = useSelector( state => state.pokemonsList ) //Con esto se toman los pokemons del state
  let [currentPokemons, pokemonsPerPage, handlePaginate] = usePagination({pageNumber:1, pokemons, numberPerPage: 12}); // con esto tomamos la info del hook creado para manejar la paginación

  useEffect( () => {
    dispatch(getPokemons())
  }, [dispatch]);

  return (
    <div className="cont-home">
      <Nav />
      
      
      <h1>Pokemons</h1>

      <Container>
        <Filters handlePaginate={handlePaginate}/>
        { pokemons.length !== 0 ? 

          <Pokemons
            pokemonsLength={pokemons.length}
            currentPokemons={currentPokemons}
            pokemonsPerPage={pokemonsPerPage}
            handlePaginate={handlePaginate}
          />
          
          : 

          <img src={Loading}/>
        
        }
      </Container>
    </div>
  ) 
};

export default Home;