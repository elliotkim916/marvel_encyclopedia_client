import React from 'react';
import { Link } from 'react-router-dom';
import { findEvent } from '../../../store/actions/events';
import { searchCharacter } from '../../../store/actions/characters';
import './EventsList.module.css';

const ListItem = ({ item, character, dispatch }) => {
  const imgUrl = `${item.thumbnail.path.slice(5)}/portrait_fantastic.${
    item.thumbnail.extension
  }`;

  let action;
  character
    ? (action = () => dispatch(searchCharacter(item.name)))
    : (action = () => dispatch(findEvent(item.resourceURI)));

  return (
    <li className="event-history" onClick={action}>
      <img src={imgUrl} alt="Event cover" className="event-cover-img" />
      <br />
      <Link className="event-title-link" to="/event">
        {character ? item.name : item.title}
      </Link>
    </li>
  );
};

export default ListItem;
