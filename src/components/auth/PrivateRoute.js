import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, authed }) {
  console.log(authed);
  return (
    <Route
      render={(props) =>
        authed ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
export default PrivateRoute;
