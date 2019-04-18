import React, { Component } from 'react';
import PizzaService from '../../services/pizza-service';
import { toast } from 'react-toastify';

class UpdatePizza extends Component {
    static service = new PizzaService();

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            ingredients: '',
            imageUrl: '',
            price: '',
        }
    }

    componentWillMount() {
        const selectedPizza = this.props.pizzas
            .filter(pizza => pizza._id === this.props.match.params.id)

        selectedPizza.forEach(pizza => {
            this.setState({
                title: pizza.title,
                ingredients: pizza.ingredients,
                imageUrl: pizza.imageUrl,
                price: pizza.price,
            })
        })

    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { title, ingredients, imageUrl, price } = this.state;
        const pizza = { title, ingredients, imageUrl, price };
        
        const result = await UpdatePizza.service.updatePizza(pizza,this.props.match.params.id)
    
        toast(`${result.message}`)
        this.props.updatedPizza(pizza);
        this.props.history.push('/');

    }

    render() {
        return (
            <div className="updatePizza">
                <h1>Update Pizza</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="updatePizza__label">Title</label>
                    <br />
                    <input
                        className="updatePizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.title}
                    />
                    <br />
                    <label className="updatePizza__label">Ingredients</label>
                    <br />
                    <input
                        className="updatePizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="ingredients"
                        value={this.state.ingredients
                        }
                    />
                    <br />
                    <label className="updatePizza__label">ImageUrl</label>
                    <br />
                    <input
                        className="updatePizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="imageUrl"
                        value={this.state.imageUrl
                        }
                    />
                    <br />
                    <label className="updatePizza__label">Price</label>
                    <br />
                    <input
                        className="updatePizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="price"
                        value={this.state.price}
                    />
                    <br />
                    <button className="updatePizza__btn" type="submit">Update</button>
                </form>
            </div>
        )
    }

}
export default UpdatePizza;