import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './views/home/home';
import About from './views/about/about';
import Login from './views/login/login';
import Register from './views/register/register';
import NotFound from './views/not-found/not-found';


class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
