import React from 'react';
import {connect} from 'react-redux';
import './events-list.css';
import {findEvent} from '../actions';

export class EventsList extends React.Component {
    render() {
        let eventTitles = '';
        if (this.props.event) {
            eventTitles = this.props.event.map((event, index) => (
                <div 
                    key={`event-${index}`} 
                    className="event-history" 
                    onClick={() => this.props.dispatch(findEvent(event.resourceURI))}
                >
                    <img 
                        src={`${event.thumbnail.path.slice(5)}/portrait_fantastic.${event.thumbnail.extension}`} 
                        alt=""
                        className="event-cover-img"
                    />
                    <p className="event-title">{event.title}</p>
                </div>
            ))
        }

        return (
            <div className="events-list-section">
                <header className="events-list-header">
                    <h2 className="event-header">COMIC EVENTS & CROSSOVERS</h2>
                </header>
                <ul className="events-list-all">
                {eventTitles}
                </ul>    
            </div>
        );
    }
}

export default connect()(EventsList);