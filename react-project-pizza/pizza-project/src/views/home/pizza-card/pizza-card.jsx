import React from 'react';
import {Link} from 'react-router-dom';

function PizzaCard ({ title, imageUrl, price,_id,ingredients }){
    return (
        <div className="pizza-card">
            <div className="pizz-card__title">
                <h4>{title}</h4>
            </div>
            <div className="pizza-card__image">
                <img src={imageUrl} alt="pizzaPicture" />
            </div>
            <div className="pizza-card__ingredients">
               <div>Ingredients</div>
               {ingredients}
            </div>
            <div className="pizza-card__price">{price}</div>
            <button className="btn order-btn"><Link to={`/pizzas/${_id}`}>Order</Link></button>
        </div>
    )
}

export default PizzaCard;