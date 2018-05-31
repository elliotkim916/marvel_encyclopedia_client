import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {findEvent} from '../actions/events';
import './events-list.css';

export class EventsList extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <div className="loader">L O A D I N G . . . </div>;
        }

        let eventTitles = '';
        if (this.props.event) {
            eventTitles = this.props.event.map((event, index) => (
                <li 
                    key={`event-${index}`} 
                    className="event-history" 
                    onClick={() => this.props.dispatch(findEvent(event.resourceURI))}
                >
                    <img 
                        src={`${event.thumbnail.path.slice(5)}/portrait_fantastic.${event.thumbnail.extension}`} 
                        alt=""
                        className="event-cover-img"
                    /><br/>     
                    <Link className="event-title-link" to="/event">{event.title}</Link>
                </li>
            ));
        }

        return (
        <ul className="events-list-all">
            {eventTitles}
        </ul>    
        );
    }

    render() {
        return (
            <div className="events-list-section">
                <header className="events-list-header">
                    <div className="lines"><h2 className="event-header">COMIC EVENTS & CROSSOVERS</h2></div>
                </header>
                <ul className="events-list-all">
                    {this.renderResults()}
                </ul>    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.characterReducer.eventLoading
});

export default connect(mapStateToProps)(EventsList);