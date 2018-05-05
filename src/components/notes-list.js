import React from 'react';
import './notes-list.css';

export default function NotesList(props) {
    const notes = props.notes.map((note, index) => (
        <li key={index}>
            {note}
            <a href="#note"><p>[<em>Placeholder for notes 1</em>]</p></a>
        </li>
    ));

    return (
        <section>
            <header>
                Your Notes
            </header>

            <ul>
                {notes}
            </ul>
        </section>
    );
}