import {useState, useRef} from 'react';
import { useDispatch } from 'react-redux';
import {getPokemonByName} from '../../actions/index'


const SearchBar = () =>{

    let dispatch = useDispatch();
    let [ search, setSearch] = useState('');
    let searchInput = useRef();

    const handleSubmint = (e) => {
        console.log('handlesubmint', searchInput.current.value)
        e.preventDefault();
        dispatch( getPokemonByName(searchInput.current.value) )
        setSearch(`search: ${searchInput.current.value}`);
    }

    
    
    return (
        <form onSubmit={handleSubmint}>
            <input type="text" name="search" ref={searchInput}/>
            <button>Buscar</button>
        </form>
    )


}


export default SearchBar;