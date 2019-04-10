import React, {Component} from 'react';


class CreatePizza extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            ingredients: '',
            imageUrl: '',
            price: '',
            id: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div className="createPizza">
                <h1>Create Pizza</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.createPizza(this.state);

                }}>

                    <label>Title</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="title" id="title"/>
                    <br/>
                    <label>Ingredients</label>
                    <br/>
                    <textarea type="text" onChange={this.handleChange} name="ingredients" id="description"/>
                    <br/>
                    <label>ImageUrl</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="imageUrl" id="imageUrl"/>
                    <br/>
                    <label>Price</label>
                    <br/>
                    <input type="text" onChange={this.handleChange} name="price" id="priceId"/>
                    <br/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        )
    }

}
export default CreatePizza;