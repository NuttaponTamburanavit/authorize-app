import React, { Component } from 'react';
import './style.scss';

class SignIn extends Component {
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
        <button className="submit-btn">Submit</button>
      </div>
     </div>
   )
 }
}

export default SignIn;