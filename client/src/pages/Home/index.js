import React from "react";
import Search from "../../components/Search";
import ContentCard from "../../components/ContentCard";

export const Home = ({ handleFormSubmit, handleInputChange, results }) => {
  return (
    <div>
      <Search
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ContentCard results={results} />
    </div>
  );
};

export default Home;
