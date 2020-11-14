import React from "react";
import Search from "../components/Search";
import AnimeCard from "../components/AnimeCard/index";

function Main(props) {
    return (
      <div>
        <Search
          handleInputChange={props.handleInputChange}
          handleFormSubmit={props.handleFormSubmit}
        />
        <AnimeCard results={props.state.results} />
      </div>
    );

}

export default Main;
