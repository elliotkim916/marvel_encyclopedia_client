import React from 'react';
import { Link } from 'react-router-dom';
import { findEvent } from '../../../actions/events';
import { searchCharacter } from '../../../actions/characters';
import './EventsList.module.css';

const EventListItem = ({ event, character, dispatch }) => {
  const imgUrl = `${event.thumbnail.path.slice(5)}/portrait_fantastic.${
    event.thumbnail.extension
  }`;

  let action;
  character
    ? (action = () => dispatch(searchCharacter(event.name)))
    : (action = () => dispatch(findEvent(event.resourceURI)));

  return (
    <li className="event-history" onClick={action}>
      <img src={imgUrl} alt="Event cover" className="event-cover-img" />
      <br />
      <Link className="event-title-link" to="/event">
        {character ? event.name : event.title}
      </Link>
    </li>
  );
};

export default EventListItem;
