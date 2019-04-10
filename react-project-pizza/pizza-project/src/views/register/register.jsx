import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit(event){
        event.preventDefault()
        alert('A name was submitted: ' + this.state[this.email]);
        this.props.registerUser(this.state)
    }

    render() {
        return(
            <div className="register-wrapper">
            <form className="register-form" action="#" onSubmit={this.handleSubmit}>
                    <p className="register-form__header">Register</p>
                    <label className="label" htmlFor="email">Username</label>
                    <input
                        className="register-form__input"
                        id="username"
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <label className="label" htmlFor="email">Email</label>
                    <input
                        className="register-form__input"
                        id="email"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div className="forgot-link-wrapper">
                        <label className="label" htmlFor="password">Password</label>
                        <a href="#">Forgot?</a>
                    </div>
                    <input
                        className="register-form__input"
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div className="submit-container">
                        <button className="register-form__submit-btn" type="submit">Register</button>
                        <div className="register-form__social-buttons">
                            <a href="#" className="social-button social-button--google social-button--google--small"></a>
                            <a href="#" className="social-button social-button--facebook social-button--facebook--normal"></a>
                            <a href="#" className="social-button social-button--twitter social-button--twitter--large"></a>
                        </div>
                    </div>
                    <div className="register-form__create-account">
                        <p className="register-form__create-account__label">Have an account already?</p>
                        <Link to="/login" className="register-form__create-account__link">Log In</Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default Register;
