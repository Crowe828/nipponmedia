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
  state = {
    results: [],
    search: "",
    result: {},
  };

  componentDidMount() {
    this.animeInfo("My hero");
  }

  animeInfo = (query) => {
    API.getAnime(query)
      .then((res) => this.setState({ ...this.state, results: res.data.data }))
      .catch((err) => console.log(err));
  };

  mangaInfo = (query) => {
    API.getManga(query)
      .then((res) => this.setState({ ...this.state, results: res.data.data }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.animeInfo(this.state.search);
  };

  handleFormSubmitManga = (event) => {
    event.preventDefault();
    this.mangaInfo(this.state.search);
  };

  render() {
    return (
      <div className="App">
        <Router>
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
            <Route path="/:id">
              <Details state={this.state} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
