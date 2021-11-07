import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType, getTypes } from "../../actions/index";
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import './Filters.css'


const Filters = ({handleChange}) => {

    let dispatch = useDispatch();
    let types = useSelector( state => state.allTypes )

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch])

    return (

        <nav className='filters'>

            <SearchBar/>
            
            <Filter
                label='Ordernar'
                name='ordenar'
                options={[{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrden}
                handleChange={handleChange}
            />

            <Filter
                label='Attack'
                name='attack'
                options={[{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrdenAttack}
                handleChange={handleChange}
            />

            <Filter
                label='Types'
                name='types'
                options={[{value:'all', name:'All'}, ...types]}
                action={filterPokemonsByType}
                handleChange={handleChange}
            />

            <Filter
                label='Origin'
                name='origin'
                options={[{value:'all', name:'All'},{value:'existentes', name:'Existentes'},{value:'creados', name:'Creados'}]}
                action={filterPokemonsFrom}
                handleChange={handleChange}
            />

        </nav>
    )
}

export default Filters;