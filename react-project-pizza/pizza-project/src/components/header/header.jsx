import React from 'react';
import {NavLink} from 'react-router-dom'

import './header.css';

const Header = () =>  {
    return (
        <header>
            <nav className="header-nav">
                <ul className="header-nav__items">
                    <li><NavLink to="/" activeClassName="selected">Logo</NavLink></li>
                    <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink to="/orders" activeClassName="selected">My orders</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
    export default Header;