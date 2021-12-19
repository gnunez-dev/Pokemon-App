import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, getPokemonCarrusel } from '../../actions/index';
import { Carousel } from '@trendyol-js/react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from "../Container/Container";
import Pokemon from "../Pokemon/Pokemon";
import Loading from '../../img/ball-triangle.svg';
import './DetailsPokemon.css'


const DetailsPokemon = () => {

    let dispatch = useDispatch();
    let pokemon = useSelector( state => state.pokemonId)
    let pokemonsCarrusel = useSelector( state => state.pokemonsCarrusel )
    let {id} = useParams();
    let intViewportWidth = window.innerWidth;

    useEffect( () => {
        dispatch(getPokemonById(id))
    }, [id, dispatch])

    useEffect( () => {
        dispatch(getPokemonCarrusel(id));
    }, [id, dispatch] )

    return ( 
        <div>
            {
                !pokemon.hasOwnProperty('id') ?

                
                    <img src={Loading} className='loading' alt='Loading...'/>
                
                :
                <div className="cont-DetailsPokemon">
                    <div className='cont-title'>
                        <Container>
                            <h1>{  pokemon.name }</h1>
                        </Container>
                    </div>
                    <div className='detailsPokemon'>
                        <Container>
                            <div className='cont-image'>
                                <img src={ pokemon.image } alt={ pokemon.name } />
                            </div>
                            <div className='cont-details'>
                                <ul>
                                    <li key='1li'><h4>Life</h4><span>{pokemon.hp}</span></li>
                                    <li key='2li'><h4>Attack</h4><span>{pokemon.attack}</span></li>
                                    <li key='3li'><h4>Defense</h4><span>{pokemon.defense}</span></li>
                                    <li key='4li'><h4>Speed</h4><span>{pokemon.speed}</span></li>
                                    <li key='5li'><h4>Height</h4><span>{pokemon.height}</span></li>
                                    <li key='6li'><h4>Weight</h4><span>{pokemon.weight}</span></li>
                                </ul>
                                <div className='cont-types'>
                                    <h4>Types</h4>
                                    <ul>
                                        {
                                            pokemon.types && pokemon.types.map( t => {
                                                return <li key={t}>{t}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Container>
                        
                    </div>
                    { 
                        pokemonsCarrusel && pokemonsCarrusel.length > 0 
                    ?
                            <div className='cont-carrusel'>

                                <Container>

                                    <h2>Related Pokemon</h2>
                                    <span>{`Total Results: ${pokemonsCarrusel.length}`}</span>

                                    <Carousel
                                        show={ intViewportWidth && intViewportWidth < 1024 ? 1 : 3}
                                        responsive={true}
                                        dynamic={true}
                                        leftArrow={<FontAwesomeIcon icon={faArrowLeft}/>}
                                        rightArrow={<FontAwesomeIcon icon={faArrowRight}/>}
                                    >   
                                        {
                                            pokemonsCarrusel.map( p => {

                                                return <Pokemon 
                                                    key={p.id}
                                                    id={p.id}
                                                    image={p.image}
                                                    name={p.name}
                                                    types={p.types}
                                                />
                                            })
                                        }
                                    </Carousel>

                                </Container>
                            </div>
                        : ``
                    }

                </div>

            }
        </div>
    )
    
    


}

export default DetailsPokemon;