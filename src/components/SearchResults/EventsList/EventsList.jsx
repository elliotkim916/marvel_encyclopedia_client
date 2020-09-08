import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import './EventsList.module.css';

const EventsList = ({ loading, event, dispatch }) => {
  const renderResults = () => {
    if (loading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    const eventTitles = event.map((event, index) => (
      <ListItem key={index} item={event} dispatch={dispatch} />
    ));

    return <ul className="events-list-all">{eventTitles}</ul>;
  };

  return (
    <div className="events-list-section">
      <header className="events-list-header">
        <div className="lines">
          <h2 className="event-header">COMIC EVENTS & CROSSOVERS</h2>
        </div>
      </header>
      {renderResults()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.characterReducer.loading,
});

export default connect(mapStateToProps)(EventsList);
