import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthenticationService from '../../services/authentication-service';



class Login extends React.Component {

    static service = new AuthenticationService();

    state = {
        email: '',
        password: '',
        isLoggedIn: false,
        error: '',
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            error: ''
        }, async () => {
            try {
                const credentials = await this.service.login();
                console.log(credentials);

                this.setState({
                    isLoggedIn: true,
                })
            } catch (error) {
                this.setState({
                    error: error.message
                })
            }
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <Redirect to="/" />
            )
        }

        if (this.state.error) {

        }
        return (
            <div className="form-wrapper">
                {
                    this.state.error.length
                        ? <div>Something went wrong: {this.state.error}</div>
                        : null
                }
                <form className="login-form" action="#">
                    <p className="login-form__header">Log in to your account</p>
                    <label className="label" htmlFor="email">Email</label>
                    <input
                        className="login-form__input"
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