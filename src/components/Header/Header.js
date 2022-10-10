import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-container'>
            <Link>Quiz Expert</Link>
            <Link to='/'>Home</Link>
            <Link to='topics'>Topics</Link>
            <Link to='/Statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    );
};

export default Header;