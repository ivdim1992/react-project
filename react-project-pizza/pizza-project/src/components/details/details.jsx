import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import PizzaDetails from './pizza-details';
import Quantity from './quantity';

class Details extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            singlePizza: [],
            count: 1,
            initialPrize: 0,
            totalPrize: 0,
        }
    }

    componentDidMount() {
        this.props.pizzas.map(pizza => {
            if (pizza._id === this.props.match.params.id) {
                this.setState({
                    singlePizza: pizza,
                    initialPrize: pizza.price,
                    totalPrize:pizza.price
                })
            } else {
                console.log('not match')
            }
        })
    }

     increase = () => {
        this.setState({
            count: this.state.count += 1,
            totalPrize: this.state.totalPrize += this.state.initialPrize
        })
    }
    decrease =() => {
        if(this.state.count >= 2) {
            this.setState({
                count: this.state.count -= 1,
                totalPrize: this.state.totalPrize -= this.state.initialPrize
            })
        }
    }
    render() {
        return (
            <div className="details-container">
                <PizzaDetails pizza={this.state.singlePizza} />
                <Quantity  
                    increase={this.increase} 
                    totalPrize={this.state.totalPrize} 
                    count={this.state.count}
                    decrease={this.decrease}
                />
            </div >
        )
    }
  
}
export default Details;