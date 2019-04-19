import React, { Fragment, Component } from 'react';
import PizzaCard from '../card/card';


function ListPizzas(props) {
    return (
        <div className="pizza-container">
            <h2>Pizza's Menu</h2>
            <ul className="pizza-container__items">
                {
                    props.pizzas.length 
                    ? props.pizzas.map(pizza => (
                        <li className="item" key={pizza._id}>
                            <PizzaCard 
                                deletePizza={props.deletePizza} 
                                addedPizzas={props.addedPizzas}
                                {...pizza} />
                                
                        </li>
                    ))
                    : <div>No Pizzas in the store</div>
                }  
            </ul>
        </div>
    )

}
export default ListPizzas;