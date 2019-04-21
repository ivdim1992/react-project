import React from 'react';
import { toast } from 'react-toastify';


function Quantity(props) {
    function handleClick() {
        const {imageUrl,_id,title} = props.singlePizza;
        const { count, totalPrice } = props;
        const pizza = { imageUrl, count, totalPrice,_id,title };
        props.orderPizza(pizza);
        toast('Pizza Successfully added to Orders');
        props.history.push('/');
    }
    return (
        
        <span>
            <div className="quantity">
                Quantity:  <button onClick={props.increase} className="btn btn-increase">+</button>
                {props.count}
                <button onClick={props.decrease} className="btn btn-decrease">-</button>
            </div>
            <div className="totalPrice">Total Price:    <b>{(props.totalPrice).toFixed(2)} BGN</b></div>
            <button className="btn btn-order" onClick={handleClick}>Order</button>
        </span>
    )
}

export default Quantity;