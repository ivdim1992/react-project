import React from 'react';

function PizzaDetails(props) {
    return (
        <div className="pizza-details">
            <h3 className="pizza-details__title">{props.pizza.title}</h3>
            <img className="pizza-details__img" src={props.pizza.imageUrl} alt="pizza" />
            <div className="pizza-details__ingredients">
                <div >Ingredients:</div>
                <span className="pizza-details__ingredients">{props.pizza.ingredients}</span>
            </div>
            <div className="pizza-details__price">
                <span>Price: </span>
                <span>{props.pizza.price} BGN</span>
            </div>
        </div>
    )
}

export default PizzaDetails