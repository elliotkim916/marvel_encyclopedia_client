import React from 'react';
import {connect} from 'react-redux';
import './events-list.css';
import {findEvent} from '../actions';

export class EventsList extends React.Component {
    render() {
        let eventTitles = '';
        if (this.props.character.events) {
            console.log(this.props.character.events);
            eventTitles = this.props.character.events.items.map((event, index) => (
                <li key={`event-${index}`} className="event-name" onClick={() => this.props.dispatch(findEvent(event.resourceURI))}>
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
}

const mapStateToProps = state => ({
    eventData: state.event.event
});

export default connect(mapStateToProps)(EventsList);