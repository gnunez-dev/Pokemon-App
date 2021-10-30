import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className="nav-bar">
      <Link  to="/home" >Home</Link>
    </div>
  )
};


export default Nav;