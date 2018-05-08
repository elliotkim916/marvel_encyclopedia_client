import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
// import NewNote from './new-note';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import EventsList from './events-list';
import AdditionalLinks from './additional-links';


export function SearchResults(props) {
    console.log(props.searchResult);

    return (
        <section aria-label="search results">
            <SearchForm />
            {/* <NewNote /> */}
            { props.searchResult.loading ? '' : <CharacterInfo character={props.searchResult}/> }
            { props.searchResult.loading ? '' : <ComicsList character={props.searchResult}/> }
            { props.searchResult.loading ? '' : <EventsList character={props.searchResult}/> }
            { props.searchResult.loading ? '' : <AdditionalLinks character={props.searchResult}/> }  
        </section>
        );

}

const mapStateToProps = state => ({
    searchResult: state.character
});

export default connect(mapStateToProps)(SearchResults);