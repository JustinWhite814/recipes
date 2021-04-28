import React from 'react';
import { Link } from 'react-router-dom'
import '../Nav.css'

function Navbar(props) {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
}

export default Navbar;