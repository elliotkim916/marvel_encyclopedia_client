import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';
import Loading from '../../Loading/Loading';
import './EventsList.module.css';

const EventsList = ({ event, dispatch }) => {
  const loading = useSelector((state) => state.characterReducer.loading);

  const renderResults = () => {
    if (loading) {
      return <Loading loadingMessage="Loading.." />;
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

export default EventsList;
