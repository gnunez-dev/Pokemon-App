import React, {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import {getPokemonByName} from '../../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';


const SearchBar = () =>{

    let dispatch = useDispatch();
    let [ search, setSearch] = useState('');
    let searchInput = useRef();

    const handleSubmint = (e) => {
        e.preventDefault();
        dispatch( getPokemonByName(searchInput.current.value) )
        setSearch('');
    }

    const handleChange = (e) => {

        e.preventDefault();
        setSearch(e.target.value)

    }

    
    
    return (
        <form onSubmit={handleSubmint} className="search-bar">
            <input type="text" name="search" ref={searchInput} value={search} onChange={(e) => handleChange(e)} placeholder='Search...'/>
            <button><FontAwesomeIcon icon={faSearch}/></button>
        </form>
    )


}


export default SearchBar;