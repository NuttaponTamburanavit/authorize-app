import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import AdminTemplate from './components/templates/admin';
import SignIn from "./pages/signIn";

const handleRedirect = (props, userToken) => {
  let path = '/';

  if (userToken) {
    path = '/dashboard';
  } else {
    path = '/signin';
  }

  return (
    <Redirect
      to={{
        pathname: path,
        state: { from: props.location },
      }}
    />
  );
}

const AdminRoute = ({ component: Component, userToken, ...rest }) => (
  <Route
    {...rest}
    render={props => userToken
      ? <Component {...props} />
      : handleRedirect(props, userToken)
    }
  />
);

class PublicRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: null
    }
  }
  componentDidMount() {
    const { userToken } = this.props;
    
    this.setState({
      userToken
    })
  }
  static getDerivedStateFromProps(props, state) {
    const { userToken } = props;
    return {
      userToken
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { userToken } = this.state;
    
    if (userToken !== nextState.userToken) {
      // window.location = "/dashboard";
      return true;
    }
    return false;
  }
  render() {
    const { userToken } = this.state;
    
    return(
      <Router>
        <div className="App">
          <Route exact path={`/`} component={SignIn} />
          <Route path={`/signin`} component={SignIn} />

          <AdminRoute
            path="/dashboard"
            component={AdminTemplate}
            userToken={userToken}
          />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userToken: state.Auth.token,
  };
}

export default connect(
  mapStateToProps,
  {}
) (PublicRouter);