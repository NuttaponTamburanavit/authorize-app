import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AuthenAPI } from '../../api/authen.js';
import AuthActions from '../../redux/auth/actions';

import './style.scss';

const { login } = AuthActions;

class SignIn extends Component {

  clickLogin() {
    login();
    // const res = await AuthenAPI.login();
    // if (res.success) {
    //   localStorage.setItem('token', JSON.stringify(res.token));
    // }
    // console.log(res)
  }

  render() {
    return (
      <div className="signin-container">
        <div className="signin-form">
          <h1>Fancy App</h1>
          <div className="form-input">
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-input">
            <input type="password" placeholder="Password" />
          </div>
          <button className="submit-btn" onClick={this.clickLogin}>LOGIN</button>
          <button className="register-btn">CREAT NEW ACCOUNT</button>
        </div>
      </div>
    )
  }
}

// export default SignIn;
export default connect(
  // mapStateToProps,
  null,
  { login }
) (SignIn);