import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthenticationService from '../../services/authentication-service';

class Login extends React.Component {

    static service = new AuthenticationService();
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errMessage: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }
    handleValidation() {
        let username = this.state.username;
        let password = this.state.password;
        let formIsValid = true;

        if (!username) {
            formIsValid = false;
            toast.error("Username can not be empty");
        }

        if (!password) {
            formIsValid = false;
            toast.error("Password can not be empty");
        }
        return formIsValid;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        const credentials = { username, password };

        if (this.handleValidation()) {
            try {
                const result = await Login.service.login(credentials);
             
                if (Object.keys(result).length > 1) {
                    this.props.loggedUser(result);
                    this.props.history.push('/');
                } else {
                    this.setState({
                        errMessage: result.message
                    })

                    toast(`${this.state.errMessage}`)
                }
            } catch (err) {
                this.setState({
                    errMessage: err.message
                })
            }
        }
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <p className="login-form__header">Log in to your account</p>
                    <label className="label" htmlFor="username">Username</label>
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