import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../Login/RequiresLogin';
import EventCharacters from './EventCharacters';
import EventComics from './EventComics';
import Description from '../SearchResults/Description/Description';
import Header from '../Header/Header';
import './Event.module.css';

const Event = ({
  dispatch,
  loading,
  eventCharacter,
  eventComic,
  eventResult,
  loggedIn,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="event-section">
      <div className="event-description">
        <Header />
        <Description data={eventResult} event={true} />
      </div>

      <EventCharacters
        loading={loading}
        eventCharacter={eventCharacter}
        dispatch={dispatch}
      />

      <EventComics
        eventResult={eventResult}
        eventComic={eventComic}
        loading={loading}
        loggedIn={loggedIn}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  eventResult: state.eventReducer.clickedEvent,
  eventCharacter: state.eventReducer.eventCharacter,
  eventComic: state.eventReducer.eventComic,
  loggedIn: state.auth.currentUser,
  loading: state.eventReducer.loading,
});

export default requiresLogin()(connect(mapStateToProps)(Event));
