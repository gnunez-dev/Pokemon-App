import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType} from '../../actions/index';
import usePagination from '../../hooks/usePagination';
import Loading from '../../img/ball-triangle.svg';
import Pokemons from '../Pokemons/Pokemons';
import Filters from '../Filters/Filters';
import Container from '../Container/Container';
import NoResult from '../NoResult/NoResult';

import './Home.css'

const Home = () => {

  let actionFilters = {
    ordenar: filterPokemonsByOrden,
    attack: filterPokemonsByOrdenAttack,
    types: filterPokemonsByType,
    origin: filterPokemonsFrom,
  }
  let stateFilters = {
    ordenar: '',
    attack: '',
    types: 'all',
    origin: 'all',
  }

  let dispatch = useDispatch(); 
  let pokemons = useSelector( state => state.pokemonsList ) //Con esto se toman los pokemons del state
  let noHayResultados = useSelector( state => state.noHayResultados ) 
  let [currentPokemons, pokemonsPerPage, currentPage, handlePaginate] = usePagination({pageNumber:1, pokemons, numberPerPage: 12}); // con esto tomamos la info del hook creado para manejar la paginación
  let [filters, setFilters] = useState(stateFilters)

  useEffect( () => {
    dispatch(getPokemons())
  }, [dispatch]);



  const handleFilters = (e) => {
      dispatch( actionFilters[e.target.name](e.target.value) )
      setFilters( {...filters, [e.target.name]: e.target.value }) 
  }

  const handleClearFilter = (e) => {
    e.preventDefault();
    dispatch( actionFilters.origin('all') )
    dispatch( actionFilters.types('all') )
    setFilters(stateFilters)
    handlePaginate(1)
    
  }



  return (
    <div className="cont-home">
      <Container>
        <Filters 
          handleChange={handleFilters}
          handleSubmit={handleClearFilter}
          selected={filters}
        />
        {    
          noHayResultados ?

            <NoResult/>
          :
            pokemons.length !== 0 ? 

            <Pokemons
              pokemonsLength={pokemons.length}
              currentPokemons={currentPokemons}
              pokemonsPerPage={pokemonsPerPage}
              handlePaginate={handlePaginate}
              currentPage={currentPage}
            />
            
            : 

            <img src={Loading} alt='loading...'/>
        
        }
      </Container>
    </div>
  ) 
};

export default Home;