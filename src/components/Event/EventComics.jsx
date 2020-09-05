import React from 'react';
import ComicListItem from '../SearchResults/ComicsList/ComicListItem';
import './Event.module.css';

const EventComics = ({
  eventResult,
  eventComic,
  comicLoading,
  protectedData,
  loggedIn,
  dispatch,
}) => {
  const renderComics = () => {
    if (comicLoading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    const comic = eventComic.map((comic, index) => (
      <ComicListItem
        key={index}
        comic={comic}
        protectedData={protectedData}
        username={loggedIn.username}
        dispatch={dispatch}
      />
    ));

    return <ul className="event-comic-list">{comic}</ul>;
  };

  const urls = eventResult.urls.map((link) => link.url);

  return (
    <div className="event-comic-container">
      <div className="lines">
        <h2 className="event-container-header">
          {eventResult.title} CORE ISSUES & TIE-IN ISSUES
        </h2>
      </div>

      {renderComics()}

      <div className="see-more-link">
        <a
          href={urls[0]}
          target="_blank"
          className="more-link"
          rel="noopener noreferrer"
        >
          See More<span className="arrows"> >></span>
        </a>
      </div>
    </div>
  );
};

export default EventComics;
