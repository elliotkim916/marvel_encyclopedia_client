import React from 'react';
import ComicListItem from '../SearchResults/ComicsList/ComicListItem';
import Loading from '../Loading/Loading';
import './Event.module.css';

const EventComics = ({ eventResult, eventComic, loading, loggedIn }) => {
  const renderComics = () => {
    if (loading) {
      return <Loading loadingMessage="Loading.." />;
    }

    const comic = eventComic.map((comic, index) => (
      <ComicListItem key={index} comic={comic} username={loggedIn.username} />
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
