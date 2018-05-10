import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
// import NewNote from './new-note';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import EventsList from './events-list';
import AdditionalLinks from './additional-links';

export function SearchResults(props) {
    let searchResult;
     if (props.searchResult){
         searchResult = (
            <React.Fragment>
                <CharacterInfo character={props.searchResult} />
                <ComicsList character={props.searchResult} />
                <EventsList character={props.searchResult} />
                <AdditionalLinks character={props.searchResult} />
            </React.Fragment>
         );
    }

    return (
        <section aria-label="search results">
            <SearchForm />
            {/* <NewNote /> */}
            {Object.keys(props.searchResult).length > 0 && searchResult}
        </section>
        );

}

const mapStateToProps = state => ({
    searchResult: state.character.character,
    comicResult: state.comic.comic
});

export default connect(mapStateToProps)(SearchResults);