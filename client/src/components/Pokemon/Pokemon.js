import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearPokemonId } from '../../actions/index'
import './Pokemon.css';

const Pokemon = ({ id, image, name, types }) => {

    let dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(clearPokemonId())
    }

    return (
        
        <div key={id} className='pokemon'>
        
            <div className="pokemon-img">
                <img src={image} alt={name}/>
            </div>
            <div className="pokemon-info">
                <h3>{name}</h3>
                <div className="pokemon-type">
                    { types && types.map( t => {
                        return (
                            <span key={t}>{t}</span>
                        )
                    })}
                </div>
            
            </div>

            <Link to={`/pokemon/${id}`} className='btn-see-details' onClick={ handleClick } >See Details</Link>

        </div>
    )

}

export default Pokemon;