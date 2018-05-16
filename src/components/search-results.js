import React from 'react';
import {connect} from 'react-redux';
import SearchForm from './search-form';
// import NewNote from './new-note';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import EventsList from './events-list';
// import AdditionalLinks from './additional-links';
// import {findEvent} from '../actions';

export class SearchResults extends React.Component {
// static getDerivedStateFromProps(nextProps, prevState) {
//     console.log(prevState, nextProps);
// }

render() {    
    let searchResult;
    // console.log(this.props);
     if (this.props.searchResult){
        searchResult = (
            <React.Fragment>
                <CharacterInfo character={this.props.searchResult} />
                <ComicsList character={this.props.searchResult} comic={this.props.searchCharacterComic} />
                <EventsList character={this.props.searchResult} event={this.props.searchCharacterEvent} />
                {/* <AdditionalLinks character={this.props.searchResult} /> */}
            </React.Fragment>
         );
    }

    return (
        <section aria-label="search results">
            <a 
                href="log-in"
                className="log-out"
            >
            Log Out
            </a>
            <SearchForm />
            {/* <NewNote /> */}
            {Object.keys(this.props.searchResult).length > 0 && searchResult}
        </section>
        );

    }
}
const mapStateToProps = state => ({
    searchResult: state.characterReducer.searchedCharacter,
    searchCharacterComic: state.characterComicReducer.searchedCharacterComic,
    searchCharacterEvent: state.characterEventReducer.searchedCharacterEvent
});

export default connect(mapStateToProps)(SearchResults);