import React from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../services/authentication-service';
import { toast } from 'react-toastify';

class Register extends React.Component {
    static service = new AuthenticationService();

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    handleChange = ({ target }) => {

        this.setState({ [target.name]: target.value })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, email, password } = this.state;
        const credentials = { username, password, email };

        const result = await Register.service.register(credentials);

        if (result.errors) {
            result.errors.map(err => toast(`${err.msg}`))
        } else {
            this.props.loggedUser(this.state)
            this.props.history.push('/');
        }
    }

    render() {
        return (
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
