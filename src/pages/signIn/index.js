import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
import { Icon } from 'antd';

import Loading from '../loading';
import AuthActions from '../../redux/auth/actions';

import './style.scss';

const { login } = AuthActions;

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      formLogin: {
        email: null,
        password: null
      }
    }
  }

  inputEmail = (evt) => {
    const { formLogin } = this.state;
    let email = evt.target.value;

    this.setState({
      formLogin: { ...formLogin, email }
    })
  }

  inputPassword = (evt) => {
    const { formLogin } = this.state;
    let password = evt.target.value;

    this.setState({
      formLogin: { ...formLogin, password }
    })
  }

  submitLogin = (event) => {
    const { formLogin } = this.state;
    const { login } = this.props;
    event.preventDefault();

    login(formLogin);
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
    const { userToken, location, isSubmitLogin } = this.props;

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
          <form className="signin-form" onSubmit={this.submitLogin}>
            <h1>Fancy App</h1>
            <div className="form-input">
              <input type="text" placeholder="Email" onKeyUp={this.inputEmail} />
            </div>
            <div className="form-input">
              <input type="password" placeholder="Password" onKeyUp={this.inputPassword} />
            </div>
            <button className={`submit-btn ${isSubmitLogin ? `disabled` : ``}`} onClick={this.submitLogin}>
              {isSubmitLogin &&
                <span className="loading-icon">
                  <Icon type="loading" />
                </span>
              }
              LOGIN
            </button>
            <Link to="/register" className="register-btn">
              CREAT NEW ACCOUNT
            </Link>
          </form>
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
) (SignIn);