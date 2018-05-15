import React from 'react';
import './homepage.css';
import SearchForm from './search-form';
// import NotesList from './notes-list';
// import AlreadyReadList from './already-read-list';
// import ReadLaterList from './read-later-list';

export default function Homepage(props) {
    return (
        <section aria-label="homepage">
            <a 
                href="log-in"
                className="log-out"
            >
            Log Out
            </a>    
            <SearchForm />
            {/* <NotesList /> */}
            {/* <AlreadyReadList />
            <ReadLaterList /> */}
        </section>
    );
}