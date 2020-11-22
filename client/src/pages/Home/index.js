import React from "react";
import Search from "../../components/Search";
import ContentCard from "../../components/ContentCard";

export const Home = ({ handleFormSubmit, handleInputChange, results }) => {
  return (
    <div>
      {/* Searchbar */}
      <Search
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      {/* Anime/manga rendered into cards */}
      <ContentCard results={results} />
    </div>
  );
};

export default Home;
