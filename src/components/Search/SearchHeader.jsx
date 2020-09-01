import React from 'react';
import './Search.module.css';

const SearchHeader = () => {
  return (
    <header className="search-form-header">
      <h1 className="form-header-text">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png"
          alt="Marvel Encyclopedia"
          className="marvel-logo"
        />
        <div className="header-text">ENCYCLOPEDIA</div>
      </h1>
    </header>
  );
};

export default SearchHeader;
