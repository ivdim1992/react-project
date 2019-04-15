import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/header/header';
import Home from './views/home/home';
import About from './views/about/about';
import Login from './views/login/login';
import Register from './views/register/register';
import Details from './components/details/details';
import CreatePizzaForm from './views/createPizzaForm/createPizzaForm';
import UpdatePizza from './views/createPizzaForm/updatePizza';
import Footer from './components/footer/footer';

import NotFound from './views/not-found/not-found';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            userLoged: false,
            message: '',
            pizzas: [],
            isAdmin: false,
            selectedPizzaId: 0
        }
    }
    // LOGIN
    loginUser(user) {
        fetch('http://localhost:9999/auth/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then((data) => {
                if (data.errors) {
                    data.errors.forEach(err => {
                        toast.error(`${err.msg}`)
                    });
                } else {
                    this.setState({
                        user: data.username,
                        userLoged: true,
                        message: data.message,
                        isAdmin: data.isAdmin
                    })
                    toast(`${this.state.message}`)

                    // sessionStorage.setItem('userId', data.userId);
                    if (!data.message) {
                        localStorage.setItem('username', data.username);
                        localStorage.setItem('token', data.token)
                    }
                }
            });
    }
    componentWillMount() {
        if (localStorage.getItem('username')) {
            this.setState({
                user: localStorage.getItem('username'),
                isAdmin: localStorage.getItem('isAdmin')
            })
        }
        //fetching all pizzas from database
        fetch('http://localhost:9999/feed/pizzas')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pizzas: data.pizzas
                })
            })
    }
    logout() {
        this.setState({
            user: null,
            isAdmin: false,
            userLoged: false,
        })
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        toast('User successfully logged out')
    }

    // REGISTER USER
    registerUser(user) {
        fetch('http://localhost:9999/auth/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(body => {
                if (body.errors) {
                    body.errors.forEach(err => {
                        toast.error(`${err.msg}`)
                    });
                } else {
                    this.setState({
                        user: body.username,
                        message: body.message,
                        userLoged: true,
                    })

                    toast(`${this.state.message}`)

                    this.loginUser({ username: user.username, password: user.password })
                }
            });
    };

    createPizza(pizza) {
        console.log(pizza)
        fetch('http://localhost:9999/feed/pizza/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pizza)
        })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    data.errors.forEach(err => {
                        console.error(err)
                        toast.error(`${err.msg}`)
                    });
                } else {
                    toast('Succesfully Created')
                }
                console.log(data)
            })
    }
    render() {
        return (
            <Router>
                <ToastContainer />
                <Header username={this.state.user} isAdmin={this.state.isAdmin} logout={this.logout.bind(this)} />
                <Switch>
                    <Route exact path="/" component={(props) => <Home {...props} isAdmin={this.state.isAdmin} pizzas={this.state.pizzas} />} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/register"
                        component={(props) =>
                            this.state.userLoged === false
                                ? <Register {...props} registerUser={this.registerUser.bind(this)} />
                                : <Redirect to="/" />
                        } />

                    <Route
                        path="/login"
                        component={(props) =>
                            this.state.userLoged === false
                                ? <Login {...props} loginUser={this.loginUser.bind(this)} />
                                : <Redirect to="/" />
                        }
                    />
                    <Route path="/pizzas/:id" component={(props) => <Details  pizza={this.state.pizzas[this.state.selectedPizzaId]}  {...props} />}/>
                    <Route path="/create" component={(props) =>
                        this.state.isAdmin
                            ? <CreatePizzaForm {...props} createPizza={this.createPizza.bind(this)} />
                            : <Redirect to="/login" />
                    } />
                    <Route path="/logout" component={() =>
                        this.state.user
                            ? null
                            : <Redirect to="/" />
                    } />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
