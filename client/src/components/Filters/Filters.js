import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType, getTypes } from "../../actions/index";
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import './Filters.css'

let arrayKey = ['881','882','883','884','885','886'];

const Filters = ({handleChange, handleSubmit, selected }) => {

    let dispatch = useDispatch();
    let types = useSelector( state => state.allTypes )

    useEffect( () => {
        dispatch( getTypes() )
    }, [dispatch])

    return (

        <nav className='filters'>

            <SearchBar key={arrayKey[0]}/>
            
            <Filter
                key={arrayKey[1]}
                label='Ordernar'
                name='ordenar'
                options={[{value:'', name:'- Select an option -'},{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrden}
                handleChange={handleChange}
                selected={selected.ordenar}
            />

            <Filter
                key={arrayKey[2]}
                label='Attack'
                name='attack'
                options={[{value:'', name:'- Select an option -'},{value:'asc', name:'Ascendiente'}, {value:'desc', name:'Descendiente'}]}
                action={filterPokemonsByOrdenAttack}
                handleChange={handleChange}
                selected ={selected.attack}
            />

            <Filter
                key={arrayKey[3]}
                label='Types'
                name='types'
                options={[{value:'all', name:'All'}, ...types]}
                action={filterPokemonsByType}
                handleChange={handleChange}
                selected ={selected.types}
            />

            <Filter
                key={arrayKey[4]}
                label='Origin'
                name='origin'
                options={[{value:'all', name:'All'},{value:'existentes', name:'Existentes'},{value:'creados', name:'Creados'}]}
                action={filterPokemonsFrom}
                handleChange={handleChange}
                selected ={selected.origin}
            />

            <form key={arrayKey[5]} onSubmit={ (e) => handleSubmit(e) } className='clear-filters'>
                <button>Clear filters</button>
            </form>

        </nav>
    )
}

export default Filters;