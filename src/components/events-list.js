import React from 'react';
import {connect} from 'react-redux';
import './events-list.css';
import {findEvent} from '../actions';

export class EventsList extends React.Component {
    render() {
        let eventTitles = '';
        if (this.props.event) {
            eventTitles = this.props.event.map((event, index) => (
                <li 
                    key={`event-${index}`} 
                    className="event-name" 
                    onClick={() => this.props.dispatch(findEvent(event.resourceURI))}
                >
                    <img 
                        src={`${event.thumbnail.path.slice(5)}/portrait_fantastic.${event.thumbnail.extension}`} 
                        alt="Event cover"
                        className="event-cover-img"
                    />
                    <p className="event-title">{event.title}</p>
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

export default connect()(EventsList);