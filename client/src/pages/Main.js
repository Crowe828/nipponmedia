import React from "react";
import Search from "../components/Search";
import AnimeCard from "../components/AnimeCard/index";
import SearchManga from "../components/SearchManga";

function Main(props) {
  return (
    <div>
      <Search
        handleInputChange={props.handleInputChange}
        handleFormSubmit={props.handleFormSubmit}
      />
      <SearchManga
        handleInputChange={props.handleInputChange}
        handleFormSubmitManga={props.handleFormSubmitManga}
      />
      <AnimeCard results={props.state.results} />
    </div>
  );
}

export default Main;
