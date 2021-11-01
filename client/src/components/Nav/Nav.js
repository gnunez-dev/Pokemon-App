import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo-pokemon.svg';
import Container from '../Container/Container';
import './Nav.css';

export function Nav() {
  return (
    <div className="nav-bar">
      <Container>
    
        <div className='cont-logo-nav'>
          <Logo className="logo-nav"/>
        </div>
        <nav className='nav-menu'>
          <NavLink exact to="/" activeClassName="item-nav-menu-selected" className="item-nav-menu">Landing Page</NavLink>
          <NavLink to="/home" activeClassName="item-nav-menu-selected" className="item-nav-menu">Home</NavLink>
          <NavLink to="/create" activeClassName="item-nav-menu-selected" className="item-nav-menu">Create</NavLink>
        </nav>
      
      </Container>
    </div>
  )
};


export default Nav;