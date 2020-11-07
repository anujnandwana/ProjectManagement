import React from "react";
import Books from "./components/Books/Books";
import Login from "./components/Login/Login";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";

class App extends React.Component {
  state= {
    userDtls:null
  }

  render() {

    return (
      <div className="App">
        <Switch>
        <Route
              exact
              path="/"
              render={() =>
                localStorage.getItem('userDtls') !==null ? (
                  <Route component={Books} />
                ) : (
                  <Route component={Login} />
                )
              }
            />
          <Redirect from="*" to="/" />
        </Switch>

      </div>
    );
  }
}

export default App;
