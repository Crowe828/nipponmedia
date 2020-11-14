import React, { Component } from "react";
import Search from "../components/Search";
import AnimeCard from "../components/AnimeCard/index";
import API from "../utils/API";

class Main extends Component {
  state = {
    results: [],
    search: "",
    result: {},
  };

  componentDidMount() {
    this.animeInfo("My hero");
  }

  animeInfo = (query) => {
    console.log(query);
    API.getAnime(query)
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
    console.log(this.state.search);
    this.animeInfo(this.state.search);
  };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <AnimeCard results={this.state.results} />
      </div>
    );
  }
}

export default Main;
