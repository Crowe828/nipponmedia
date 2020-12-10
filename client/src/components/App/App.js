import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import { useDispatch } from "react-redux";
import { loadUser } from "../../actions/authActions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PrivateRoute from "../PrivateRoute";
import Home from "../../pages/Home";
import UserDashboard from "../../pages/UserDashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Details from "../../pages/Details";
import About from "../../pages/About";
import API from "../../utils/API";
import "./style.css";

export const App = () => {
  // state for data that comes in for the API call and the search term in the search bar
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  // on mount, state will show popular animes
  useEffect(() => {
    getDefault();
  }, []);

  // function that sets state to popular animes
  function getDefault() {
    API.defaultData()
      .then((res) => {
        setResults(res.data.data);
      })
      .catch((err) => console.log(err));
  }
  // function that will show the anime / manga that you searched and set the state
  function getInfo(query, category) {
    API.getData(query, category)
      .then((res) => setResults(res.data.data))
      .catch((err) => console.log(err));
  }
  // changes search from id="search" on change and sets the state of it to the current search
  function handleInputChange(event) {
    setSearch(event.target.value);
  }
  // handles the submit to use the API call dependant on search term and type of anime/manga in category.
  //passing type through Search component from state
  function handleFormSubmit(event, category) {
    event.preventDefault();
    getInfo(search, category);
  }

  // on mount, state will show popular animes
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <div
        className="App"
        style={{
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <Router history={history}>
          {/* So that the footer is always at the bottom */}
          <div style={{ paddingBottom: "50px" }}>
            <Header />
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home
                  handleFormSubmit={handleFormSubmit}
                  handleInputChange={handleInputChange}
                  results={results}
                  search={search}
                />
              </Route>
              <Route path="/login" component={Login} />
              {/* Register = Signup page */}
              <Route path="/register" component={Register} />
              <Route path="/about" component={About} />
              {/* Dashboard = Profile page */}
              <PrivateRoute path="/dashboard" component={UserDashboard} />
              {/* Details page for each anime/manga */}
              <Route path="/:type/:id">
                <Details results={results} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
