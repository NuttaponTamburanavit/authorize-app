import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
import { Icon } from 'antd';

import Loading from '../loading';
import UserActions from '../../redux/user/actions';

import './style.scss';

const { create_user } = UserActions;

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
    const { create_user } = this.props;

    if(this.validateForm()) {
      create_user(formRegister);
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
    if (formRegister.password !== formRegister.confirmPassword) {
      this.refs.confirmPassword.classList.add('error')
      isFormCorrect = false;
    }

    if (isFormCorrect) {
      this.refs.email.classList.remove('error');
      this.refs.password.classList.remove('error')
      this.refs.confirmPassword.classList.remove('error')
    }
    return isFormCorrect;
  }

  validateMatchPassword(password, confirmPassword) {
    if (password === confirmPassword) {
      this.refs.confirmPassword.classList.remove('error')
    } else {
      this.refs.confirmPassword.classList.add('error')
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
    const { userToken, location, isSubmitRegister } = this.props;

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
              <input type="text" placeholder="Email" onKeyUp={this.inputEmail} autoComplete="new-email"/>
              <span className="text-warning">Email required.</span>
            </div>
            <div className="form-input" ref="password">
              <input type="password" placeholder="Password" onKeyUp={this.inputPassword} autoComplete="new-password"/>
              <span className="text-warning">Password required.</span>
            </div>
            <div className="form-input" ref="confirmPassword">
              <input type="password" placeholder="Confirm Password" onKeyUp={this.inputConfirmPassword} autoComplete="new-password"/>
              <span className="text-warning">Confirm password unmatch.</span>
            </div>

            <button className={`register-submit-btn ${isSubmitRegister ? `disabled` : ``}`} 
              onClick={this.clickRegister} 
              id="registerSubmit"
            >
              {isSubmitRegister &&
                <span className="loading-icon">
                  <Icon type="loading" />
                </span>
              }
              Register
            </button>
            <Link to="/signin" className="back-to-login-btn">
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
    isSubmitRegister: state.User.isSubmitRegister,
  };
}

export default connect(
  mapStateToProps,
  { create_user }
) (Register);