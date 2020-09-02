import React from 'react';
import { Link } from 'react-router-dom';
import { findEvent } from '../../../actions/events';
import './EventsList.module.css';

const EventListItem = ({ event, dispatch }) => {
  const imgUrl = `${event.thumbnail.path.slice(5)}/portrait_fantastic.${
    event.thumbnail.extension
  }`;

  return (
    <li
      className="event-history"
      onClick={() => dispatch(findEvent(event.resourceURI))}
    >
      <img src={imgUrl} alt="Event cover" className="event-cover-img" />
      <br />
      <Link className="event-title-link" to="/event">
        {event.title}
      </Link>
    </li>
  );
};

export default EventListItem;
