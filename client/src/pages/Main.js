import React from "react";
import Search from "../components/Search";
import ContentCard from "../components/ContentCard";

// sending state to ContentCard and sending functions to Search via props
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
