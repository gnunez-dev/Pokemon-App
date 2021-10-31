
import { useDispatch } from "react-redux";
import { filterPokemonsByOrden, filterPokemonsFrom } from "../../actions";
import './Filters.css'


const Filters = () => {


    /**
     *  un nav que contenga un form para los filtros
     *  hay que manejar un dispatch para que se actualicen los pokemons segun los filtros que se le pasen
     *  creat la acción que va a manejar el dispath
     *  crear los reducers que se necesiten segun el tipo de filtro
     */

    let dispatch = useDispatch();

    const handleChageOrder = (e) => {
        e.preventDefault();
        dispatch(filterPokemonsByOrden(e.target.value));
        console.log('handler Filter Orden')
    }

    return (
        <nav className='filters'>
            <ul>
                <li key="orden">
                    <label>Ordernar</label>
                    <select onChange={ (e) => handleChageOrder(e)}>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}

export default Filters;