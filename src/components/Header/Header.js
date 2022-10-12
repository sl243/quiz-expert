import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='container header-container'>
            <Link to='/'>Quiz Expert</Link>
            <div className='d-flex'>
                <div className='navber'>
                    <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/Statistics'>Statistics</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
                <div onClick={() => setOpen(!open)} className='nav-icon'>
                    {
                        open ? <Bars3Icon></Bars3Icon> : <XMarkIcon></XMarkIcon>
                    }
                    {/* <Bars3Icon></Bars3Icon>
                    <XMarkIcon></XMarkIcon> */}
                </div>
            </div>

        </nav>
    );
};

export default Header;