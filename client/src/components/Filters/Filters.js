import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType, getTypes } from "../../actions/index";
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import './Filters.css'


const Filters = ({handleChange, handleSubmit, selected }) => {

    let dispatch = useDispatch();
    let types = useSelector( state => state.allTypes )

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch])

    return (

        <nav className='filters'>

            <SearchBar/>
            
            <Filter
                key='1f'
                label='Ordernar'
                name='ordenar'
                options={[{value:'', name:'- Select an option -'},{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrden}
                handleChange={handleChange}
                selected={selected.ordenar}
            />

            <Filter
                key='2f'
                label='Attack'
                name='attack'
                options={[{value:'', name:'- Select an option -'},{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrdenAttack}
                handleChange={handleChange}
                selected ={selected.attack}
            />

            <Filter
                key='3f'
                label='Types'
                name='types'
                options={[{value:'all', name:'All'}, ...types]}
                action={filterPokemonsByType}
                handleChange={handleChange}
                selected ={selected.types}
            />

            <Filter
                key='4f'
                label='Origin'
                name='origin'
                options={[{value:'all', name:'All'},{value:'existentes', name:'Existentes'},{value:'creados', name:'Creados'}]}
                action={filterPokemonsFrom}
                handleChange={handleChange}
                selected ={selected.origin}
            />

            <form onSubmit={ (e) => handleSubmit(e) } className='clear-filters'>
                <button>Clear filters</button>
            </form>

        </nav>
    )
}

export default Filters;