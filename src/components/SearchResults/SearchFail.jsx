import React from 'react';
import './SearchResults.module.css';

const SearchFail = () => {
  return (
    <div className="error-msg">
      <img
        src="https://i.annihil.us/u/prod/marvel/i/mg/b/40/54adba004fe21.png"
        alt="Doctor Strange"
        className="dr-strange"
      />
      <h3>Sorry, no results were found. Try another search!</h3>
    </div>
  );
};

export default SearchFail;
