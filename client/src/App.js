import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
