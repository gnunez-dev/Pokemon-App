import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../actions/index';

const Home = () => {

    let dispatch = useDispatch();
    let pokemons = useSelector( state => state.pokemonsList )

    useEffect( () => {
        console.log('useEffect')
        dispatch(getPokemons())
    }, [dispatch]);

  return (
    <div>
        <h1>Pokemons</h1>
      <ul>
       
       { pokemons && pokemons.map( p => {
           return(
               <li key={p.id}>{p.name}</li>
           )
       })}   

      </ul>
    </div>
  ) 
};

export default Home;