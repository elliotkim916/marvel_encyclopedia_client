import React from 'react';
import { connect } from 'react-redux';
import ComicListItem from './ComicListItem';
import './ComicsList.module.css';
import '../../Dashboard/Dashboard.module.css';

const ComicsList = ({ loading, comic, loggedIn, character }) => {
  const renderResults = () => {
    if (loading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    const comicTitles = comic.map((comic, index) => (
      <ComicListItem key={index} comic={comic} username={loggedIn.username} />
    ));

    return <ul className="comics-list-all">{comicTitles}</ul>;
  };

  const urls = character.urls.map((link) => link.url);

  return (
    <section className="comics-list-section">
      <header className="comics-list-header">
        <h2 className="h2">COMIC BOOK APPEARANCES</h2>
      </header>
      <ul className="comics-list-all">{renderResults()}</ul>
      <div className="more-comics-link">
        <a
          href={urls[2]}
          target="_blank"
          className="comics-new-link"
          rel="noopener noreferrer"
        >
          See More<span className="arrows"> >></span>
        </a>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser,
  loading: state.characterReducer.comicLoading,
});

export default connect(mapStateToProps)(ComicsList);
