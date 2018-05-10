import React from 'react';
import './events-list.css';

export default function EventsList(props) {
    let eventTitles = '';
    if (props.character.events) {
        eventTitles = props.character.events.items.map((event, index) => (
            <li key={`event-${index}`} className="event-name">
                <p className="event-title">{event.name}</p>
            </li>
        ))
    }

    return (
        <section className="events-list-section">
            <header>
                <h2>Comic Events & Crossovers</h2>
            </header>

            <div className="events-container">
                <ul>
                    {eventTitles}
                </ul>
            </div>    
        </section>
    );
}