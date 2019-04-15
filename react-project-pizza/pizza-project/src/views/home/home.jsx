import React from 'react';
import {Link} from 'react-router-dom'

import WelcomeMessage from './welcome-message';
import ListPizzas from './list-pizzas/list-pizzas';

function Home(props) {
    return (
        <div className="welcome-wrapper">
            <WelcomeMessage message="Welcome to our Delicious pizzas">
            </WelcomeMessage>
            <ListPizzas isAdmin={props.isAdmin} updatePizza={props.updatePizza} deletePizza={props.deletePizza} pizzas={props.pizzas}/>
        </div>
    )
}
export default Home;