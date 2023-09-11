import React from 'react'
import './PokemonCreate.css';

const PokemonCreate = ({formulario, typesPokemons}) =>{

    const getNameType = (t, typesPokemons) => {
        for(let i = 0; i < typesPokemons.length; i++){

            if(typesPokemons[i].id === t){
                return <span>{typesPokemons[i].name}</span>
            }
    
        }
    }

    return(
        <div className='cont-new-pokemon'>
            <div className='new-pokemon'>
                <div className='cont-img'>
                    <img src={formulario.image ? formulario.image : `https://cdn-icons-png.flaticon.com/512/188/188918.png`} alt={formulario.name}/>
                </div>
                <div className='cont-details'>
                    <h2>{formulario.name}</h2>
                    <ul>
                        <li>
                            <h4>Life</h4>
                            <span>{formulario.hp}</span>
                        </li>
                        <li>
                            <h4>Attack</h4>
                            <span>{formulario.attack}</span>
                        </li>
                        <li>
                            <h4>Defense</h4>
                            <span>{formulario.defense}</span>
                        </li>
                        <li>
                            <h4>Speed</h4>
                            <span>{formulario.speed}</span>
                        </li>
                        <li>
                            <h4>Height</h4>
                            <span>{formulario.height}</span>
                        </li>
                        <li>
                            <h4>Weight</h4>
                            <span>{formulario.weight}</span>
                        </li>
                        <li>
                            <h4>Types</h4>
                            <div className='cont-types'>{ 
                                formulario.types && formulario.types.map(t => getNameType(t, typesPokemons) )
                            } </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default PokemonCreate;