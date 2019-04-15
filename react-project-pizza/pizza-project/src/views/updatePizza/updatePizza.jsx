import React, { Component } from 'react';


class UpdatePizza extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            ingredients: '',
            imageUrl: '',
            price: '',
        }

        // this.initialState = this.state
    }

    componentWillMount() {
        this.props.pizzas.map(pizza => {
            if(pizza._id === this.props.match.params.id) {
                this.setState({
                    title: pizza.title,
                    ingredients: pizza.ingredients,
                    imageUrl:pizza.imageUrl,
                    price: pizza.price,
                })
            }     
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updatePizza(this.state,this.props.match.params.id);
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
                    <label  className="updatePizza__label">Price</label>
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