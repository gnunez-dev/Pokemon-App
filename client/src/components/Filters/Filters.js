import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsByOrdenAttack, filterPokemonsFrom, filterPokemonsByType, getTypes } from "../../actions/index";
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
        <ul>
            <li key="orden">
                <label>Ordernar</label>
                <select onChange={ (e) => handleChageOrder(e)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </li>
            <li key="attack">
                <label>Attack</label>
                <select onChange={ (e) => handleChageOrdenAttack(e)} >
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                </select>
            </li>
            <li key="types">
                <label>Types</label>
                <select onChange={ (e) => handleChageTypes(e)} >
                    <option key="all1" value="All">All</option>
                    {
                        types && types.map( t => {
                            return <option key={t.id} value={t.name}>{t.name}</option>
                        })
                    }
                </select>
            </li>
            <li key="from">
                <label>Clase</label>
                <select onChange={ (e) => handleChageFrom(e)} >
                    <option value="All">All</option>
                    <option value="existentes">existentes</option>
                    <option value="creados">creados</option>                    
                </select>
            </li>
            
        </ul>
      </nav>
    )
}

export default Filters;