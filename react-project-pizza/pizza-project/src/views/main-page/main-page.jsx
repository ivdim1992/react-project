import React from 'react';
import { Link } from 'react-router-dom'

import WelcomeMessage from './welcome-message/welcome-message';
import ListPizzas from './list/list';


function MainPage (props) {

        return (
            <div className="welcome-wrapper">
                <WelcomeMessage message="Welcome to our Delicious pizzas">
                </WelcomeMessage>
                <ListPizzas
                    deletePizza={props.deletePizza}
                    pizzas={props.pizzas}
                   
                />
            </div>
        )
}
export default MainPage;