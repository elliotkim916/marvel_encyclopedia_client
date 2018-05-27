import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import EventsList from './events-list';
import requiresLogin from './requires-login';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './search-results.css';

export class SearchResults extends React.Component {
    logOut(e) {
        e.preventDefault();
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {  
        let searchResult;
        if (this.props.searchResult){
            searchResult = (
                <React.Fragment>
                    <CharacterInfo character={this.props.searchResult} />
                    <ComicsList character={this.props.searchResult} comic={this.props.searchCharacterComic} />
                    <EventsList character={this.props.searchResult} event={this.props.searchCharacterEvent} />
                </React.Fragment>
            );
        } 

    return (
        <section aria-label="search results">
            <a 
                href="dashboard"
                className="back-home"
            >
            Home
            </a>
            <a 
                href="/"
                className="log-out"
                onClick={(e) => this.logOut(e)}
            >
            Log Out
            </a>
            <SearchForm />
            {Object.keys(this.props.searchResult).length > 0 && searchResult}
        </section>
        );

    }
}

const mapStateToProps = state => ({
    searchResult: state.characterReducer.searchedCharacter,
    searchCharacterComic: state.characterComicReducer.searchedCharacterComic,
    searchCharacterEvent: state.characterEventReducer.searchedCharacterEvent,
    authToken: state.auth.authToken
});

export default requiresLogin()(connect(mapStateToProps)(SearchResults));