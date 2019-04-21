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
                                <li><NavLink to="/" exact activeClassName="selected">Menu</NavLink></li>
                                <span>Welcome,<b>{props.username}</b></span>
                                {
                                    props.isAdmin
                                        ? <li><NavLink to="/create" activeClassName="selected">Create Pizza</NavLink></li>
                                        : <li><NavLink to="/orders" activeClassName="selected">My orders</NavLink></li>
                                }
                                
                                <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                                <li><NavLink to="/logout" onClick={props.logout}>Logout</NavLink></li>

                            </span>
                            )
                            : (
                                <span>
                                    <li><NavLink to="/" exact activeClassName="selected">Menu</NavLink></li>
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