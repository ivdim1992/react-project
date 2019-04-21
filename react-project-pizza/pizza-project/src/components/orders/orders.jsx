import React from 'react';
import PizzaDetails from '../pizza-details/pizza-details';
import { toast } from 'react-toastify';


function Orders(props) {

    const { orderedPizzas } = props;
    let finalPrice = 0;

    props.orderedPizzas.forEach(pizza => finalPrice += pizza.totalPrice);

    if (orderedPizzas.length < 1) {
        return <div className="no-orders">You have no orders yet!!!</div>
    }

    function  handleClick() {
        toast.success('Congratulations your pizzas is coming to you!')
        props.history.push('/');
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
                {orderedPizzas.map(pizza => (
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
                <div className="btn-container">
                    <button className="proceed" onClick={handleClick}>Proceed to checkout</button>
                </div>
                <div>Total Price: {finalPrice} BGN</div>
            </div>
        </div>
    )

}

export default Orders;