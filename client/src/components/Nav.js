import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className="nav-bar">
      <Link to="/" >Salir</Link>
      <Link to="/home" >Home</Link>
      <Link to="/create" >Create</Link>
    </div>
  )
};


export default Nav;