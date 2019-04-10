import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    
    return (
        <header>
            <nav className="header-nav">
                <ul className="header-nav__items">
                    {
                        props.username
                            ? (<span>
                                <span>Welcome {props.username}</span>
                                <li><NavLink to="/orders" activeClassName="selected">My orders</NavLink></li>
                                <li><NavLink to="/logout">Logout</NavLink></li>
                                <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                            </span>
                            )
                            : (
                                <span>
                                    <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
                                    <li><NavLink to="/login" activeClassName="selected">Login</NavLink></li>
                                    <li><NavLink to="/register" activeClassName="selected">Register</NavLink></li>
                                </span>
                            )
                    }
                </ul>
            </nav>
        </header>
    )
}
export default Header;