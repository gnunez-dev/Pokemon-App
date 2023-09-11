import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo-pokemon.svg';
import Container from '../Container/Container';
import './Nav.css';

const classNavLink = ({ isActive }) => {
  let activeClass = isActive ? "item-nav-menu-selected" : ""
  return `item-nav-menu ${activeClass}`
}

export function Nav() {
  return (
    <div className="nav-bar">
      <Container>
    
        <div className='cont-logo-nav'>
          <Link to='/home'><Logo className="logo-nav"/></Link>
        </div>
        <nav className='nav-menu'>
          <NavLink to="/" className={classNavLink}>Landing Page</NavLink>
          <NavLink to="/home" className={classNavLink}>Home</NavLink>
          <NavLink to="/create" className={classNavLink}>Create</NavLink>
        </nav>
      
      </Container>
    </div>
  )
};


export default Nav;