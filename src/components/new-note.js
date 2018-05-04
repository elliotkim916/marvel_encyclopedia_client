import React from 'react';
import './new-note.css';

export function NewNote(props) {
    return (
        <section class="notes-section">
            <header>
                <h3>Take Notes</h3>
            </header>
        
            <form class="notes-form">
                <div class="notes-section"><input type="text" placeholder="Title of note" name="note-title" class="notes-title" /></div>
                <div class="notes-section"><textarea name="notes" rows="15" /></div>
                <button type="submit">Save</button>
            </form>
        </section>
    )
}