import React from 'react';

import SearchForm from './search-form';
// import NotesList from './notes-list';
import AlreadyReadList from './already-read-list';
import ReadLaterList from './read-later-list';

export default function Homepage(props) {
    return (
        <section aria-label="homepage">
            <SearchForm />
            {/* <NotesList /> */}
            <AlreadyReadList />
            <ReadLaterList />
        </section>
    );
}