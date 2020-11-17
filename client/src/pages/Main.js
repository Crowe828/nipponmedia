import React from "react";
import Search from "../components/Search";
import ContentCard from "../components/ContentCard";

// sending state to ContentCard and sending functions to Search via props
function Main({handleFormSubmit, handleInputChange, results}) {
  return (
    <div>
      <Search
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ContentCard results={results} />
    </div>
  );
}

export default Main;
