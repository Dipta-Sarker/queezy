import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <h2>Queezy</h2>
            </div>
           <div>
           <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/chart'>Chart</Link>
            <Link className='link' to='/blog'>Blog</Link>
           </div>
        </nav>
    );
};

export default Header;