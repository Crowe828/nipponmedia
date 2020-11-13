import React, { Component } from "react";
import Search from "../components/Search";
import AnimeCard from "../components/AnimeCard/index";
import API from "../utils/API";

class Main extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.animeInfo();
  }

  animeInfo = () => {
    API.getAnime()
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Search />
        <AnimeCard results={this.state.results} />
      </div>
    );
  }
}

export default Main;
