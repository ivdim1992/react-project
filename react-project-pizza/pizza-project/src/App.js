import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';

import CreatePizza from './views/createPizzaForm/createPizza';
import UpdatePizza from './views/createPizzaForm/updatePizza';

import Home from './views/home/home';
import About from './views/about/about';
import Login from './views/login/login';
import Register from './views/register/register';
import AdminNav from './views/adminNav/adminNav';
import NotFound from './views/not-found/not-found';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: null,
            pizzas: [],
            hasFetched: false,
            loginForm: false,
            message: '',
            userLoged: false,
            admin: false,
            username: ''
        }
    } 
    // LOGIN
    loginUser(user){
        console.log(user)
        fetch('http://localhost:9999/auth/signin',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(body => {
                if(body.errors){
                    body.errors.forEach(error => {
                        console.log(error);
                    })
                }else{
                    localStorage.setItem('userId', body.userId );
                    localStorage.setItem('username', body.username);
                    localStorage.setItem('message', body.message);
  
                    this.setState({
                        user: body.user,
                        message: body.message,
                        userLoged : true,
                        username: body.username
                    })
                    console.log("Login!");
                   console.log(body)
                    this.authenticateUser()
                }
            })
    }

    authenticateUser (){
        let userId = localStorage.getItem("userId");
        if(userId === "5c8c0be3db4c1e2264fe894e"){
            this.setState({
                admin: true
            })
        }
    }
    // REGISTER USER
    registerUser(user){
        console.log(user)
        fetch('http://localhost:9999/auth/signup',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
            .then(body => {
                if(body.errors){
                    body.errors.forEach(error => {
                        console.log(error);
                    })
                }else{
                    localStorage.setItem('userId', body.userId)
                    localStorage.setItem('username', body.username)
                    localStorage.setItem('message', body.message)
  
                    this.setState({
                        user: body.username,
                        message: body.message,
                        userLoged: true,
                        username: body.username
                    })
                }
            })
    }

    // createPizza(data) {
    //     fetch('http://localhost:9999/feed/pizza/create',{
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then(response => response.json())
    //         .then(body => {
    //             if(body.errors){
    //                 body.errors.forEach(error =>{
    //                     console.log(error)
    //                 })
    //             }else{
    //                 //Record added successfully
    //                 this.fetchPizzas();

    //             }
    //         })
    // }

    // fetchPIzzas() {
    //     fetch("http://localhost:9999/feed/pizzas")
    //     .then(rowData => rowData.json())
    //     .then(body => {
    //         this.setState({pizzas: body.pizzas})

    //     })
    // }

    render() {
        return (
            <Router>
                <Header username={this.state.username} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route 
                    path="/register" 
                    component={() => 
                        this.state.userLoged === false 
                        ? <Register registerUser={this.registerUser.bind(this)} />
                        : null
                    } />
                    
                    <Route
                path="/login"
                component={()=> 
                    this.state.userLoged ===false
                    ?  <Login loginUser={this.loginUser.bind(this)} />
                    :null
                 }
            />
                    <Route  path="admin/create" component={() => < CreatePizza createPizza={this.createPizza.bind(this)}/>} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
