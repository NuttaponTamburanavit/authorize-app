import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

import Loading from '../loading';
import AuthActions from '../../redux/auth/actions';

import './style.scss';

const { login } = AuthActions;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      formRegister: {
        email: null,
        password: null,
        confirmPassword: null
      }
    }
  }

  inputEmail = (evt) => {
    const { formRegister } = this.state;
    let email = evt.target.value;

    this.setState({
      formRegister: { ...formRegister, email }
    })
  }

  inputPassword = (evt) => {
    const { formRegister } = this.state;
    let password = evt.target.value;

    this.validateMatchPassword(password, formRegister.confirmPassword);

    this.setState({
      formRegister: { ...formRegister, password }
    })
  }

  inputConfirmPassword = (evt) => {
    const { formRegister } = this.state;
    let confirmPassword = evt.target.value;

    this.validateMatchPassword(formRegister.password, confirmPassword);

    this.setState({
      formRegister: { ...formRegister, confirmPassword }
    })
  }

  clickRegister = () => {
    const { formRegister } = this.state;
    const { login } = this.props;

    if(this.validateForm()) {
      console.log('Form success');
      // login(formRegister);
    }
  }

  validateForm() {
    const { formRegister } = this.state;
    let isFormCorrect = true;
    
    if (formRegister.email === null || formRegister.email === '') {
      this.refs.email.classList.add('error');
      isFormCorrect = false;
    }
    if (formRegister.password === null || formRegister.password === '') {
      this.refs.password.classList.add('error')
      isFormCorrect = false;
    }
    if (formRegister.confirmPassword === null || formRegister.confirmPassword === '') {
      this.refs.confirmPassword.classList.add('error')
      isFormCorrect = false;
    }
    if (!this.validateMatchPassword(formRegister.password, formRegister.confirmPassword)) {
      isFormCorrect = false;
    }
    return isFormCorrect;
  }

  validateMatchPassword(password, confirmPassword) {
    if (password === confirmPassword) {
      this.refs.confirmPassword.classList.remove('error')
      return true;
    } else {
      this.refs.confirmPassword.classList.add('error')
      return false;
    }
  }

  componentDidMount() {
    const { userToken } = this.props;

    if (userToken) {
      window.location = '/dashboard';
    } else {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const { loading } = this.state;
    const { userToken, location } = this.props;

    let Component = <Loading />;

    if (userToken) {
      return (<Redirect
        to={{
          pathname: '/dashboard',
          state: { from: location },
        }}
      />);
    }

    if (!loading) {
      Component = (
        <div className="guest-container">
          <div className="register-form">
            <h1>Create Account</h1>
            <div className="form-input" ref="email">
              <input type="text" placeholder="Email" onKeyUp={this.inputEmail} />
              <span className="text-warning">Email invalid</span>
            </div>
            <div className="form-input" ref="password">
              <input type="password" placeholder="Password" onKeyUp={this.inputPassword} />
              <span className="text-warning">Password invalid</span>
            </div>
            <div className="form-input" ref="confirmPassword">
              <input type="password" placeholder="Confirm Password" onKeyUp={this.inputConfirmPassword} />
              <span className="text-warning">Confirm password unmatch</span>
            </div>

            <button className="submit-btn" onClick={this.clickRegister}>Register</button>
            <Link to="/signin" className="register-btn">
              Back to LogIn
            </Link>
          </div>
        </div>
      );
    }

    return Component;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userToken: state.Auth.token,
    isSubmitLogin: state.Auth.isSubmitLogin,
  };
}

export default connect(
  mapStateToProps,
  { login }
) (Register);