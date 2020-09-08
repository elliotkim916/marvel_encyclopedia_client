import React from 'react';
import ListItem from '../SearchResults/EventsList/ListItem';
import Loading from '../Loading/Loading';
import './Event.module.css';

const EventCharacters = ({ loading, eventCharacter, dispatch }) => {
  const renderCharacters = () => {
    if (loading) {
      return <Loading loadingMessage="Loading.." />;
    }

    const character = eventCharacter.map((character, index) => (
      <ListItem
        item={character}
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
