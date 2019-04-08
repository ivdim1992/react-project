import React, { Fragment, Component } from 'react';
import PizzaCard from './pizza-card';
import Loading from './loading';

import PizzaService from '../../services/pizza-service';

class ListPizzas extends Component {
    state = {
        pizzas: [],
        isLoading: false,
    }
    static service = new PizzaService();
    render() {
        const { pizzas, isLoading } = this.state;

        if (isLoading) {
            return <Loading />
        }

        if (!pizzas.length && !isLoading) {
            return (
                <div>No pizza's in the store !</div>
            )
        }
        return (
            <div className="pizza-container">
                <h2>Pizza's Menu</h2>
                {
                    pizzas.map(pizza => (
                        <PizzaCard key={pizza.id} {...pizza} />
                    ))
                }
            </div>
        )
    }

  async  componentDidMount() {
        try {
         const pizzas = await ListPizzas.service.getPizzas();
         
         this.setState({
             pizzas
         })
        } catch (error) {
            console.error(error);   
        }
    }
}
export default ListPizzas;