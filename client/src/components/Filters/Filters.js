import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType, getTypes } from "../../actions/index";
import {ReactComponent as LogoPokemon} from '../../img/logo-pokemon.svg';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import './Filters.css'


const Filters = ({handlePaginate}) => {


    /**
     *  un nav que contenga un form para los filtros
     *  hay que manejar un dispatch para que se actualicen los pokemons segun los filtros que se le pasen
     *  creat la acción que va a manejar el dispath
     *  crear los reducers que se necesiten segun el tipo de filtro
     */

    

    let dispatch = useDispatch();
    let [orden, setOrden] = useState('');
    let [from, setFrom] = useState('');
    let types = useSelector( state => state.allTypes )

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch])


    const handleChageOrder = (e) => {
        dispatch(filterPokemonsByOrden(e.target.value));
        handlePaginate(1)
        setOrden(`Orden ${e.target.value}`)
  
      }
      const handleChageOrdenAttack = (e) => {
        dispatch(filterPokemonsByOrdenAttack(e.target.value));
        handlePaginate(1)
        setOrden(`Orden ${e.target.value}`)
      }
  
      const handleChageTypes = (e) => {
        dispatch( filterPokemonsByType(e.target.value) )
  
      }
  
      const handleChageFrom = (e) => {
        dispatch( filterPokemonsFrom(e.target.value) )
        setFrom(`From ${e.target.value}`)
      }

    return (
        <nav className='filters'>
            <SearchBar/>
            <Filter
                name='Ordernar'
                options={[{id:'asc', name:'Ascendiente'}, {id:'desc', name:'Descendiente'}]}
                handleChange={handleChageOrder}
            />

            <Filter
                name='Attack'
                options={[{id:'asc', name:'Ascendiente'}, {id:'desc', name:'Descendiente'}]}
                handleChange={handleChageOrdenAttack}
            />

            <Filter
                name='Types'
                options={[...types, {id:'all', name:'All'}]}
                handleChange={handleChageTypes}
            />

            <Filter
                name='Clase'
                options={[{id:'all', name:'All'},{id:'existentes', name:'Existentes'},{id:'creados', name:'Creados'}]}
                handleChange={handleChageFrom}
            />

        </nav>
    )
}

export default Filters;