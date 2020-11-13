import React, { Component } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
