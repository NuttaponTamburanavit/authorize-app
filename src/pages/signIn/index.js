import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

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

  clickLogin = () => {
    const { formLogin } = this.state;
    const { login } = this.props;

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
        <div className="signin-container">
          <div className="signin-form">
            <h1>Fancy App</h1>
            <div className="form-input">
              <input type="text" placeholder="Email" onKeyUp={this.inputEmail} />
            </div>
            <div className="form-input">
              <input type="password" placeholder="Password" onKeyUp={this.inputPassword} />
            </div>
            <button className="submit-btn" onClick={this.clickLogin}>LOGIN</button>
            <button className="register-btn">CREAT NEW ACCOUNT</button>
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
) (SignIn);