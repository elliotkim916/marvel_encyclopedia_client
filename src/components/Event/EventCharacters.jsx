import React from 'react';
import EventListItem from '../SearchResults/EventsList/EventListItem';
import './Event.module.css';

const EventCharacters = ({ characterLoading, eventCharacter, dispatch }) => {
  const renderCharacters = () => {
    if (characterLoading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    const character = eventCharacter.map((character, index) => (
      <EventListItem
        event={character}
        dispatch={dispatch}
        key={index}
        character={true}
      />
    ));

    return <ul className="event-character-list">{character}</ul>;
  };

  return (
    <div className="event-character-container">
      <h2 className="event-character-header">CHARACTERS IN THIS EVENT</h2>
      {renderCharacters()}
    </div>
  );
};

export default EventCharacters;
