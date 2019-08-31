import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import DashboardTemplate from './components/templates/dashboard';
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

const PublicRouter = () => {
  let userToken;

  return(
    <Router>
      <div className="App">
        <Route exact path={`/`} component={SignIn} />
        <Route path={`/signin`} component={SignIn} />

        <AdminRoute
          path="/dashboard"
          component={DashboardTemplate}
          userToken={userToken}
        />
      </div>
    </Router>
  )
}

export default PublicRouter;