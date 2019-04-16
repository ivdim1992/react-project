import React from 'react';
import {Link} from 'react-router-dom';

function PizzaCard ({ title, imageUrl, price,_id,ingredients,isAdmin,deletePizza }){

  
   function handleClick (){
       deletePizza({_id})
    }
    return (
        <div className="pizza-card">
            <div className="pizz-card__title">
                <h4>{title}</h4>
            </div>
            <div className="pizza-card__image">
                <img src={imageUrl} alt="pizzaPicture" />
            </div>
            <div className="pizza-card__ingredients">
               <div>Ingredients:</div>
                {
                   ingredients
                }
            </div>
            <div className="pizza-card__price">{price} <span>BGN</span></div>
            {
                isAdmin 
                ? <span>
                     <Link to={`/update/${_id}`}><button className="btn update-btn">Update</button></Link>  
                    <button className="btn delete-btn" onClick={handleClick}>Delete</button>
                </span>
                :  localStorage.getItem('username')
                    ? <Link to={`/pizzas/${_id}`}><button className="btn order-btn">Order</button></Link> 
                    : <Link to={`/login`}><button className="btn order-btn">Order</button></Link>     
            }
        </div>
    )
}

export default PizzaCard;