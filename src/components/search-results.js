import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
// import NewNote from './new-note';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import Comic from './comic';
import EventsList from './events-list';
import AdditionalLinks from './additional-links';

export function SearchResults(props) {
    //console.log(props.searchResult);
    console.log(props.comicResult);
    return (
        <section aria-label="search results">
            <SearchForm />
            {/* <NewNote /> */}
            { props.searchResult.loading ? '' : <CharacterInfo character={props.searchResult} /> }
            { props.searchResult.loading ? '' : <ComicsList character={props.searchResult} /> }
            { props.comicResult.loading ? '' : <Comic comic={props.searchResult} /> }
            { props.searchResult.loading ? '' : <EventsList character={props.searchResult}/> }
            { props.searchResult.loading ? '' : <AdditionalLinks character={props.searchResult}/> }  
        </section>
        );

}

const mapStateToProps = state => ({
    searchResult: state.character.character,
    comicResult: state.comic.comic
});

export default connect(mapStateToProps)(SearchResults);