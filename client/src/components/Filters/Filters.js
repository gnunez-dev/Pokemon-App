import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType, getTypes } from "../../actions/index";
import Filter from '../Filter/Filter';

import SearchBar from '../SearchBar/SearchBar';
import './Filters.css'


const Filters = ({handlePaginate}) => {

    let dispatch = useDispatch();
    let types = useSelector( state => state.allTypes )
    
    

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch])


    return (
        <nav className='filters'>

            <SearchBar/>
            <Filter
                name='Ordernar'
                options={[{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrden}
                handlePaginate={handlePaginate}
            />

            <Filter
                name='Attack'
                options={[{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrdenAttack}
                handlePaginate={handlePaginate}
            />

            <Filter
                name='Types'
                options={[...types, {value:'all', name:'All'}]}
                action={filterPokemonsByType}
                handlePaginate={handlePaginate}
            />

            <Filter
                name='Origen'
                options={[{id:'all', name:'All'},{id:'existentes', name:'Existentes'},{id:'creados', name:'Creados'}]}
                action={filterPokemonsFrom}
                handlePaginate={handlePaginate}
            />

        </nav>
    )
}

export default Filters;