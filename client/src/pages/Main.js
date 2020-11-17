import React from "react";
import Search from "../components/Search";
import ContentCard from "../components/ContentCard";
import SearchManga from "../components/SearchManga";

function Main(props) {
  return (
    <div>
      <Search
        handleInputChange={props.handleInputChange}
        handleFormSubmit={props.handleFormSubmit}
      />
      <ContentCard results={props.state.results} />
    </div>
  );
}

export default Main;
