import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../Login/RequiresLogin';
import Header from '../Header/Header';
import ComicCharacter from './ComicCharacter';
import ComicDescription from './ComicDescription';
import './Comic.module.css';

const Comic = ({ dispatch, loading, comicResult, comicCharacter }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCharacters = () => {
    if (loading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    const comicCharacters = comicCharacter.map((character, index) => (
      <ComicCharacter key={index} character={character} dispatch={dispatch} />
    ));

    return <ul className="character-list">{comicCharacters}</ul>;
  };

  return (
    <section className="comic-section">
      <div className="comic-book-information">
        <Header />
        <ComicDescription comicResult={comicResult} />
      </div>

      <div className="character-container">
        <h2 className="container-header">CHARACTERS IN THIS ISSUE</h2>
        {renderCharacters()}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  comicResult: state.comicReducer.clickedComic,
  comicCharacter: state.comicReducer.comicCharacter,
  loggedIn: state.auth.currentUser !== null,
  loading: state.comicReducer.loading,
});

export default requiresLogin()(connect(mapStateToProps)(Comic));
