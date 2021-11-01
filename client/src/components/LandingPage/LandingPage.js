import React from 'react'
import {Link} from 'react-router-dom';
import {ReactComponent as LogoPokemon} from '../../img/logo-pokemon.svg';
import Container from '../Container/Container'

import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="cont-landingpage">
            <Container>
                <section>
                    <LogoPokemon className="logo-landingpage" />
                    <Link to='/home' className="btn-landingpage">
                        <button>See Pokemons</button>
                    </Link>
                </section>
            </Container>
        </div>
    )
}

export default LandingPage;