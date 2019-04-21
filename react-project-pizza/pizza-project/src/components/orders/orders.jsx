import React from 'react';
import PizzaDetails from '../pizza-details/pizza-details';

const Orders = (props) => {




    const { addPizzas } = props;
    let finalPrice = 0;

    props.addPizzas.forEach(pizza => finalPrice += pizza.totalPrice);
    console.log(finalPrice)
    if (addPizzas.length < 1) {
        return <div className="no-orders">You have no orders yet!!!</div>
    }
    return (
        <div className="orders-container">
            <table className="orders-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                {addPizzas.map(pizza => (
                   <tbody>
                        <tr>
                        <th className="oreder__title">{pizza.title}</th>
                        <th className="orde__count">{pizza.count}</th>
                        <th className="order__totalPrice">{pizza.totalPrice} BGN</th>
                    </tr>
                   </tbody>
                ))}
            </table>
            <div className="proceed-buttons">
                    <button className="proceed">Proceed to checkout</button>
                     <div>Total Price: {finalPrice} BGN</div>
            </div>
        </div>
    )

}

export default Orders;