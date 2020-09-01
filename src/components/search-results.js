import React from 'react';
import { connect } from 'react-redux';
import Search from './Search/Search';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import EventsList from './events-list';
import requiresLogin from './requires-login';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './search-results.css';

export class SearchResults extends React.Component {
  logOut(e) {
    e.preventDefault();
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    let searchResult;
    if (this.props.searchResult) {
      searchResult = (
        <React.Fragment>
          <CharacterInfo character={this.props.searchResult} />
          <ComicsList
            character={this.props.searchResult}
            comic={this.props.searchCharacterComic}
          />
          <EventsList
            character={this.props.searchResult}
            event={this.props.searchCharacterEvent}
          />
        </React.Fragment>
      );
    }

    let error;
    if (!this.props.searchResult) {
      error = (
        <div className="error-msg">
          <img
            src="https://i.annihil.us/u/prod/marvel/i/mg/b/40/54adba004fe21.png"
            alt="Doctor Strange"
            className="dr-strange"
          />
          <h3>Sorry, no results were found. Try another search!</h3>
        </div>
      );
    }

    return (
      <section aria-label="search results">
        <a href="dashboard" className="back-home">
          Home
        </a>
        <a href="/" className="log-out" onClick={(e) => this.logOut(e)}>
          Log Out
        </a>
        <Search />
        {this.props.searchResult &&
          Object.keys(this.props.searchResult).length > 0 &&
          searchResult}
        {error}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  searchResult: state.characterReducer.searchedCharacter,
  searchCharacterComic: state.characterReducer.searchedCharacterComic,
  searchCharacterEvent: state.characterReducer.searchedCharacterEvent,
  authToken: state.auth.authToken,
});

export default requiresLogin()(connect(mapStateToProps)(SearchResults));
