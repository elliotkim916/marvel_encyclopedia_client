import React from 'react';
import './new-note.css';

export default function NewNote(props) {
    return (
        <section class="new-notes-section">
            <header>
                <h3>Take Notes</h3>
            </header>
        
            <form class="notes-form">
                <input type="text" placeholder="Title of note" name="note-title" class="notes-title" /><br />
                <textarea name="notes" rows="15" /><br />
                <button type="submit">Save</button>
            </form>
        </section>
    )
}