import React, { Fragment, Component } from 'react';
import PizzaCard from '../pizza-card/pizza-card';


function ListPizzas(props) {
    return (
        <div className="pizza-container">
            <h2>Pizza's Menu</h2>
            <ul className="pizza-container__items">
                {
                    props.pizzas.map(pizza => (
                        <li className="item"><PizzaCard isAdmin={props.isAdmin} key={pizza._id} {...pizza} /></li>
                    ))
                }
            </ul>
        </div>
    )

}
export default ListPizzas;