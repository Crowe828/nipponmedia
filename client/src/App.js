import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";
import Search from "./components/Search";
import AnimeCard from "./components/AnimeCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Search />
        <AnimeCard />
      </div>
    );
  }
}

export default App;
