import React from 'react';
import {connect} from 'react-redux';
import './notes-list.css';

export function NotesList(props) {
    const notes = props.notes.map((note, index) => (
        <li key={index}>
            {note.title}
            <a href="#note"><p>[<em>Placeholder for notes 1</em>]</p></a>
        </li>
    ));

    return (
        <section>
            <header>
                <h3>Your Notes</h3>
            </header>

            <ul>
                {notes}
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    notes: state.notes
});

export default connect(mapStateToProps)(NotesList);