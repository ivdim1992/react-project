import React from 'react';
import {Link} from 'react-router-dom'

import WelcomeMessage from './welcome-message';
import ListPizzas from './list-pizzas/list-pizzas';

function Home(props) {
    return (
        <div className="welcome-wrapper">
            <WelcomeMessage message="Welcome to our Delicious pizzas">
            </WelcomeMessage>
            <ListPizzas  pizzas={props.pizzas}/>
        </div>
    )
}
export default Home;