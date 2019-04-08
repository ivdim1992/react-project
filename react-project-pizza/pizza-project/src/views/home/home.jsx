import React from 'react';
import {Link} from 'react-router-dom'

import WelcomeMessage from './welcome-message';
import ListPizzas from './list-pizzas';

function Home() {
    return (
        <div className="welcome-wrapper">
            <WelcomeMessage message="Welcome to our Delicious pizzas">
                <ul>
                    <li><Link to="/store">Go To menu</Link></li>
                    <li><Link to="/orders">View your orders</Link></li>
                </ul>
            </WelcomeMessage>
            <ListPizzas />
        </div>
    )
}
export default Home;