import React from 'react';

import SearchForm from './search-form';
import NewNote from './new-note';
import CharacterInfo from './character-info';
import ComicsList from './comics-list';
import AdditionalLinks from './additional-links';

export default function SearchResults(props) {
    return (
        <section aria-label="search results">
            <SearchForm />
            <NewNote />
            <CharacterInfo />
            <ComicsList />
            <AdditionalLinks />
        </section>
    );
}