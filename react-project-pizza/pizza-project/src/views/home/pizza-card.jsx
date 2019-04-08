import React from 'react';
import {Link} from 'react-router-dom';

const PizzaCard = ({ title, imageUrl, price, id }) => {
    return (
        <div className="pizza-card">
            <div pizz-card__title>
                <h3>{title}</h3>
            </div>
            <div className="pizza-card__image">
                <img src={imageUrl} alt="pizzaPicture" />
            </div>
            <div className="pizza-card__price">{price}</div>
            <button className="btn order-btn"><Link to={`/details/${id}`}>Order</Link></button>
        </div>
    )
}

export default PizzaCard;