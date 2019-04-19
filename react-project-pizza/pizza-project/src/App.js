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
import Orders from './components/orders/orders';
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
            addPizzas: []
        }

        this.updatePizza = this.updatedPizza.bind(this);
        this.loggedUser = this.loggedUser.bind(this);
        this.deletePizza = this.deletePizza.bind(this);
        this.createPizza = this.createPizza.bind(this);
        this.logout = this.logout.bind(this);

    }
    async componentDidMount() {
        try {
            const receivedPizzas = await App.service.getAllPizzas();

            this.setState({
                pizzas: receivedPizzas.pizzas
            });
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
        window.localStorage.setItem('username', user.username);
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

    async deletePizza({ _id }) {
        await App.service.deletePizza(_id)
            .then(data => {
                if (data.errors) {
                    data.errors.forEach(err => {
                        toast.error(`${err.msg}`)
                    });
                } else {
                    const pizzas = [...this.state.pizzas];
                    const ourIndex = pizzas.findIndex((pizza) => pizza._id === _id)
                    pizzas.splice(ourIndex, 1)
                    this.setState({
                        pizzas
                    }, () => {
                        toast(`${data.message}`)
                    })
                }
            })
    }

    updatedPizza(pizza) {
        const pizzas = [...this.state.pizzas];
        const ourIndex = pizzas.findIndex(({ _id }) => _id === pizza._id)
        pizzas.splice(ourIndex, 1, pizza)
        this.setState({
            pizzas
        })
    }

    addedPizzas(pizza) {
        this.setState({
            addPizzas: [...this.state.addPizzas, pizza]
        })
    }
    render() {
        const { user, isAdmin, userLogged, pizzas } = this.state;
        return (
            <Router>
                <ToastContainer />
                <Header
                    username={user}
                    isAdmin={isAdmin}
                    logout={this.logout}
                />
                <Switch>
                    <Route exact path="/" component={(props) =>
                        <MainPage
                            {...props}
                            deletePizza={this.deletePizza}
                            pizzas={pizzas}
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
                                loggedUser={this.loggedUser} />}
                    />
                    <Route
                        path="/login"
                        component={(props) =>
                            < Login
                                {...props}
                                userLogged={userLogged}
                                loggedUser={this.loggedUser} />}
                    />
                    <Route
                        path="/pizzas/:id"
                        component={(props) =>
                            <Details
                                {...props}
                                pizzas={pizzas}
                                addedPizzas={this.addedPizzas.bind(this)}
                            />}
                    />
                    <Route
                        path="/update/:id"
                        component={(props) =>
                            <UpdatePizza
                                pizzas={pizzas}  {...props}
                                updatedPizza={this.updatePizza}
                            />}
                    />
                    <Route
                        path="/create"
                        component={(props) =>
                            isAdmin
                                ? <CreatePizzaForm {...props} createPizza={this.createPizza} />
                                : <Redirect to="/login" />}
                    />
                    <Route
                        path="/logout"
                        component={() =>
                            user
                                ? null
                                : <Redirect to="/" />}
                    />
                    <Router>
                        <Route
                            path="/orders"
                            component={() => localStorage.getItem('username')
                                ? <Orders addPizzas={this.state.addPizzas} />
                                : null}
                        />
                    </Router>
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
