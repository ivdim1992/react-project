import React from 'react';

function Quantity(props) {
    return (
        <span>
            <div className="quantity">
                Quantity:  <button onClick={props.increase} className="btn btn-increase">+</button>
                {props.count}
                <button onClick={props.decrease} className="btn btn-decrease">-</button>
            </div>
            <div className="totalPrice">Total Price:    <b>{props.totalPrize} BGN</b></div>
            <button className="btn btn-order">Order</button>
        </span>
    )
}

export default Quantity;