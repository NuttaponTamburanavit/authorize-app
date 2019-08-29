import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignIn from "./pages/signIn";

const PublicRouter = () => {
  return(
    <Router>
      <div className="App">
        <Route exact path={`/`} component={SignIn} />
      </div>
    </Router>
  )
}

export default PublicRouter;