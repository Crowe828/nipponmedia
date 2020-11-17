import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import API from "../src/utils/API";

class App extends Component {
  // state for data that comes in for the API call and the search term in the search bar
  state = {
    results: [],
    search: "",
  };
  // on mount, state will show popular animes
  componentDidMount() {
    this.getDefault();
  }
  // function that sets state to popular animes
  getDefault = () => {
    API.defaultData()
      .then((res) => this.setState({ ...this.state, results: res.data.data }))
      .catch((err) => console.log(err));
  };
  // function that will show the anime / manga that you searched and set the state
  getInfo = (query, category) => {
    console.log(query, category);
    API.getData(query, category)
      .then((res) => this.setState({ ...this.state, results: res.data.data }))
      .catch((err) => console.log(err));
  };
  // changes search from id="search" on change and sets the state of it to the current search
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // handles the submit to use the API call dependant on search term and type of anime/manga in category.
  //passing type through Search component from state
  handleFormSubmit = (event, category) => {
    event.preventDefault();
    this.getInfo(this.state.search, category);
  };

  render() {
    return (
      <div
        className="App"
        style={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Router>
          <div style={{ paddingBottom: "50px" }}>
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/">
                <Main
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmitManga={this.handleFormSubmitManga}
                  state={this.state}
                />
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
            <Switch>
              <Route path="/:type/:id">
                <Details state={this.state} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
