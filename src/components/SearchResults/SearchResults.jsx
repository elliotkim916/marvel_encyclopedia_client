import React from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import Description from './Description/Description';
import ComicsList from './ComicsList/ComicsList';
import EventsList from './EventsList/EventsList';
import requiresLogin from '../requires-login';
import Header from '../Header/Header';
import SearchFail from './SearchFail';
import './SearchResults.module.css';

const SearchResults = ({
  searchResult,
  searchCharacterComic,
  searchCharacterEvent,
}) => {
  let searchResults;

  if (searchResult) {
    searchResults = (
      <React.Fragment>
        <Description data={searchResult} />
        <ComicsList character={searchResult} comic={searchCharacterComic} />
        <EventsList character={searchResult} event={searchCharacterEvent} />
      </React.Fragment>
    );
  } else {
    searchResults = <SearchFail />;
  }

  return (
    <section aria-label="search results">
      <Header />
      <Search />
      {searchResults}
    </section>
  );
};

const mapStateToProps = (state) => ({
  searchResult: state.characterReducer.searchedCharacter,
  searchCharacterComic: state.characterReducer.searchedCharacterComic,
  searchCharacterEvent: state.characterReducer.searchedCharacterEvent,
});

export default requiresLogin()(connect(mapStateToProps)(SearchResults));
