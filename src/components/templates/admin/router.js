import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import AdminPage404 from '../../../pages/admin/page404';
import Dashboard from '../../../pages/admin/dashboard';
import Profile from '../../../pages/admin/profile';

class Router extends React.Component {
  render () {
    const { url } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={`${url}/`}
          component={Dashboard}
        />

        <Route
          path={`${url}/profile`}
          component={Profile}
        />

        <Route
          exact
          path={`*`}
          component={AdminPage404}
        />
      </Switch>
    );
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   profile: state.User.get('profile')
// });

export default withRouter(connect(
  null,
  {}
)(Router));
