import React from 'react';
import { Link, Redirect } from 'react-router-dom';



class Login extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            username: '',
            password: '',
        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state)
    }

    render() {
       
        return (
            <div className="form-wrapper">
                <form className="login-form" action="#" onSubmit={this.handleSubmit}>
                    <p className="login-form__header">Log in to your account</p>
                    <label className="label" htmlFor="email">username</label>
                    <input
                        className="login-form__input"
                        id="username"
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <div className="forgot-link-wrapper">
                        <label className="label" htmlFor="password">Password</label>
                        <a href="#">Forgot?</a>
                    </div>
                    <input
                        className="login-form__input"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="submit-container">
                        <button className="login-form__submit-btn" type="submit">Log In</button>
                        <div className="login-form__social-buttons">
                            <a href="#" className="social-button social-button--google social-button--google--small"></a>
                            <a href="#" className="social-button social-button--facebook social-button--facebook--normal"></a>
                            <a href="#" className="social-button social-button--twitter social-button--twitter--large"></a>
                        </div>
                    </div>
                    <div className="login-form__create-account">
                        <p className="login-form__create-account__label">Don`t have an account yet?</p>
                        <Link to="/register" className="login-form__create-account__link">Create an account</Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;