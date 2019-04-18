import React, { Component } from 'react';
import PizzaService from '../../services/pizza-service';
import { toast } from 'react-toastify';


class CreatePizza extends Component {
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

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = async (event) => {
        event.preventDefault();

        const { title, ingredients, imageUrl, price } = this.state;
        const pizza = { title, ingredients, imageUrl, price };

        const result = await CreatePizza.service.createPizza(pizza)

        if (Object.keys(result).length > 1) {
            toast(`${result.message}`)
            this.props.createPizza(result);
            this.props.history.push('/');
        } else {
            toast(`Price must be a number`)
        }
    }

    render() {
        return (
            <div className="createPizza">
                <h1>Create Pizza</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="createPizza__label">Title</label>
                    <br />
                    <input
                        className="createPizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.title}
                    />
                    <br />
                    <label className="createPizza__label">Ingredients</label>
                    <br />
                    <input
                        className="createPizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="ingredients"
                        value={this.state.ingredients}
                    />
                    <br />
                    <label className="createPizza__label">ImageUrl</label>
                    <br />
                    <input
                        className="createPizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="imageUrl"
                        value={this.state.imageUrl}
                    />
                    <br />
                    <label className="createPizza__label">Price</label>
                    <br />
                    <input
                        className="createPizza__input"
                        type="text"
                        onChange={this.handleChange}
                        name="price"
                        value={this.state.price}
                    />
                    <br />
                    <button className="createPizza__btn" type="submit" value="Create">Create</button>
                </form>
            </div>
        )
    }

}
export default CreatePizza;