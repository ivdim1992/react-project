import React from 'react';
import {NavLink} from 'react-router-dom'


const Header = () =>  {
    return (
        <header>
            <nav className="header-nav">
                <ul className="header-nav__items">
                    <li><NavLink to="/" activeClassName="selected img"><img src="https://www.48hourslogo.com/48hourslogo_data/2017/05/02/60689_1493696284.png"/></NavLink></li>
                    <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li><NavLink to="/orders" activeClassName="selected">My orders</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                    <li><NavLink to="/login" activeClassName="selected">Login</NavLink></li>
                    <li><NavLink to="/register" activeClassName="selected">Register</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
    export default Header;