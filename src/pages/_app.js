import React from "react";
import "./../styles/global.scss";
import IndexPage from "./index";
import DashboardPage from "./dashboard";
import { Switch, Route, Router } from "./../util/router.js";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />

        <Route exact path="/dashboard" component={DashboardPage} />

        <Route
          component={({ location }) => {
            return (
              <div
                style={{ padding: "50px", width: "100%", textAlign: "center" }}
              >
                The page <code>{location.pathname}</code> could not be found.
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
