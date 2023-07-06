import React from 'react';
import '../styles/nav.style.css';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='navBar'>
        <Link to='/' className='nav-item'>View Notes</Link>
        <span className='nav-item'>Edit Notes</span>

    </nav>
  )
}
