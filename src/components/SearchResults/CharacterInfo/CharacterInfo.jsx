import React from 'react';
import { connect } from 'react-redux';
import './CharacterInfo.module.css';

const CharacterInfo = ({ loading, character }) => {
  let imgUrl, urls;

  if (loading) {
    return <div className="loading">L O A D I N G . . . </div>;
  }

  if (character) {
    if (character.thumbnail) {
      imgUrl =
        character.thumbnail.path.slice(5) +
        '/portrait_uncanny.' +
        character.thumbnail.extension;
    }

    if (character.urls) {
      urls = character.urls.map((link) => link.url);
    }

    return (
      <section className="character-info-section">
        <hr className="style10" />

        <img src={imgUrl} alt="" className="searched-img" />
        <div className="character-description">
          <h2 className="character-name">{character.name.toUpperCase()}</h2>
          <p className="character-text">{character.description}</p>
          <div className="info-new-link">
            <a
              href={urls[1]}
              target="_blank"
              className="new-link"
              rel="noopener noreferrer"
            >
              Read More<span className="character-arrows"> >></span>
            </a>
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
  loading: state.characterReducer.characterLoading,
});

export default connect(mapStateToProps)(CharacterInfo);
