import React from "react";
import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`; // adds keyword to what you are searching in Hero section

  // Check if searchResults is empty
  const resultsHtml = searchResults.length ? (
    searchResults.map((movie, i) => <MovieCard movie={movie} key={i} />)
  ) : (
    <div className="text-center my-5">
      <h3>No results found for "{keyword}"</h3>
    </div>
  );

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
