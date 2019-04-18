import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Header from './components/header/header';
import MainPage from './views/main-page/main-page';
import About from './views/about/about';
import Login from './views/login/login';
import Register from './views/register/register';
import Details from './components/details/details';
import CreatePizzaForm from './views/createPizzaForm/createPizzaForm';
import UpdatePizza from './views/updatePizza/updatePizza';
import Footer from './components/footer/footer';

import NotFound from './views/not-found/not-found';

import PizzaService from './services/pizza-service';

class App extends Component {
    static service = new PizzaService();
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            pizzas: [],
            userLogged: false,
            isAdmin: false,
        }
    }
    async componentDidMount() {
        try {
            const receivedPizzas = await App.service.getAllPizzas();

            this.setState({
                pizzas: receivedPizzas.pizzas
            })
        } catch (err) {
            console.error(err)
        }
    }

    loggedUser(user) {
        this.setState({
            userLogged: true,
            user: user.username,
            isAdmin: user.isAdmin
        })
        window.localStorage.setItem('auth_token', user.token);
        window.localStorage.setItem('username', user.username)
        window.localStorage.setItem('isAdmin', user.isAdmin);
    }

    logout() {
        this.setState({
            user: null,
            isAdmin: false,
            userLogged: false,
        })
        localStorage.clear();
        toast('User successfully logged out')
    }

    createPizza(pizza) {
        this.setState({
            pizzas: [...this.state.pizzas, pizza.pizza]
        })
    }


    deletePizza(id) {
        fetch(`http://localhost:9999/feed/pizza/${Object.values(id)}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.errors) {
                    data.errors.forEach(err => {
                        console.error(err)
                        toast.error(`${err.msg}`)
                    });
                } else {
                    this.setState({
                        message: data.message
                    })
                    toast(`${this.state.message}`)
                    // this.getAllPizzas();
                }
            })
    }

    updatedPizza(pizza) {
        console.log(this.state.pizzas)
        console.log(pizza)
        this.setState({
            pizzas: [...this.state.pizzas, pizza]
        })
    }

    render() {

        return (
            <Router>
                <ToastContainer />
                <Header
                    username={this.state.user}
                    isAdmin={this.state.isAdmin}
                    logout={this.logout.bind(this)}
                />
                <Switch>
                    <Route exact path="/" component={(props) =>
                        <MainPage
                            {...props}
                            isAdmin={this.state.isAdmin}
                            deletePizza={this.deletePizza.bind(this)}
                            // updatePizza={this.updatePizza.bind(this)}
                            pizzas={this.state.pizzas}
                        />}
                    />
                    <Route
                        path="/about"
                        component={About}
                    />
                    <Route
                        path="/register"
                        component={(props) =>
                            <Register
                                {...props}
                                loggedUser={this.loggedUser.bind(this)} />}
                    />
                    <Route
                        path="/login"
                        component={(props) =>
                            < Login
                                {...props}
                                userLogged={this.state.userLogged}
                                loggedUser={this.loggedUser.bind(this)} />}
                    />
                    <Route
                        path="/pizzas/:id"
                        component={(props) =>
                            <Details
                                pizzas={this.state.pizzas}
                                {...props} />}
                    />
                    <Route
                        path="/update/:id"
                        component={(props) =>
                            <UpdatePizza
                                pizzas={this.state.pizzas}  {...props}
                                updatedPizza={this.updatedPizza.bind(this)}
                            />}
                    />
                    <Route
                        path="/create"
                        component={(props) =>
                            this.state.isAdmin
                                ? <CreatePizzaForm {...props} createPizza={this.createPizza.bind(this)} />
                                : <Redirect to="/login" />}
                    />
                    <Route
                        path="/logout"
                        component={() =>
                            this.state.user
                                ? null
                                : <Redirect to="/" />}
                    />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
