import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
