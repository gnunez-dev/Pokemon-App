import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {getPokemonById} from '../../actions/index';
import Nav from "../Nav/Nav";
import Container from "../Container/Container";
import './DetailsPokemon.css'


const DetailsPokemon = () => {

    let dispatch = useDispatch();
    let pokemon = useSelector( state => state.pokemonId)

    let {id} = useParams();

    useEffect( () => {
        dispatch(getPokemonById(id))
    }, [dispatch])



    return ( 
        <div className="cont-DetailsPokemon">
            <Nav/>
            <Container>
                <h1>{  pokemon.name }</h1>
            </Container>
        </div>
    )
    
    


}

export default DetailsPokemon;