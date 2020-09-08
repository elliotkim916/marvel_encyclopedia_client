import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../Login/RequiresLogin';
import Header from '../Header/Header';
import ComicDescription from './ComicDescription';
import ListItem from '../SearchResults/EventsList/ListItem';
import Loading from '../Loading/Loading';
import './Comic.module.css';

const Comic = ({ dispatch, loading, comicResult, comicCharacter }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderCharacters = () => {
    if (loading) {
      return <Loading loadingMessage="Loading.." />;
    }

    const comicCharacters = comicCharacter.map((character, index) => (
      <ListItem
        key={index}
        item={character}
        dispatch={dispatch}
        character={true}
      />
    ));

    if (comicCharacters.length < 1) {
      return <h3>No characters were found..</h3>;
    }

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
