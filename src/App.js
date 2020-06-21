import React, { useState } from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PrivateRoute from "./components/auth/PrivateRoute"
import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard"

const App = () => {
  const [isLogged, setLogged] = useState(false)

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Login isLogged={isLogged} setLogged={setLogged} />}
        />
        <PrivateRoute
          path="/dashboard"
          authed={isLogged}
          component={Dashboard}
        />
      </Switch>
    </Router>
  )
}

export default App
