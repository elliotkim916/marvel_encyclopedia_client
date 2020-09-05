import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import EventCharacters from './EventCharacters';
import EventComics from './EventComics';
import Description from '../SearchResults/Description/Description';
import Header from '../Header/Header';
import './Event.module.css';

const Event = ({
  dispatch,
  characterLoading,
  eventCharacter,
  comicLoading,
  eventComic,
  eventResult,
  loggedIn,
  protectedData,
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
        characterLoading={characterLoading}
        eventCharacter={eventCharacter}
        dispatch={dispatch}
      />

      <EventComics
        eventResult={eventResult}
        eventComic={eventComic}
        comicLoading={comicLoading}
        protectedData={protectedData}
        loggedIn={loggedIn}
        dispatch={dispatch}
      />
    </section>
  );
};

const mapStateToProps = (state) => ({
  eventResult: state.eventReducer.clickedEvent,
  eventCharacter: state.eventReducer.eventCharacter,
  eventComic: state.eventReducer.eventComic,
  loggedIn: state.auth.currentUser,
  characterLoading: state.eventReducer.eventCharacterLoading,
  comicLoading: state.eventReducer.eventComicLoading,
  protectedData: state.protectedData.data,
});

export default requiresLogin()(connect(mapStateToProps)(Event));
