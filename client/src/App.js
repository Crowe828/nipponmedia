import React, {
  Component,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Search from "./components/Search";
import AnimeCard from "./components/AnimeCard";
import Saved from "./pages/saved";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
