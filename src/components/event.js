import React from 'react';
import {connect} from 'react-redux';
import {searchCharacter} from '../actions/characters';
import {findComic} from '../actions/comics';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {addData} from '../actions/protected-data';
import {Link} from 'react-router-dom';
import requiresLogin from './requires-login';
import './event.css';

export class Event extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  onAdd(e, title, read, imgUrl, uri, username) {
    e.preventDefault();
    let already_exists = false;
    let comics_array = this.props.protectedData.data;

    comics_array.forEach(comic => {
    if (comic.title === title) {
      already_exists = true;
      window.alert(`The comic ${comic.title} has already been saved to Your Read & Unread Comics list.`);
    }
  });

    if (!already_exists) {
      this.props.dispatch(addData(title, read, imgUrl, uri, username));
      window.alert(`The comic ${title} has been saved to Your Read & Unread Comics list.`);
    }
  }

  renderCharacters() {
    if (this.props.characterLoading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    let character = '';
    if (this.props.eventCharacter) {
      character = this.props.eventCharacter.map((character, index) =>
        <li
          key={index}
          onClick={() => this.props.dispatch(searchCharacter(character.name))}
          className="eventCharactersName"
        >
          <img
            src={`${character.thumbnail.path.slice(5)}/portrait_fantastic.${character.thumbnail.extension}`}
            alt=""
            className="character-cover-img"
          /><br />
          <Link to="/search-results" className="character-name-link">
          {character.name}
          </Link>
        </li>
      );
    }

      return (
        <ul className="event-character-list">
          {character}
        </ul>
      );
  }

  renderComics() {
    if (this.props.comicLoading) {
      return <div className="loader">L O A D I N G . . . </div>;
    }

    let comic = '';
    if (this.props.eventComic) {
      comic = this.props.eventComic.map((comic, index) =>
        <li
          key={index}
          className="eventComicsName"
        >
          <form className="event-comics-form">
            <div
              className="comic-container"
              onClick={() => this.props.dispatch(findComic(comic.resourceURI))}
            >
              <img
                src={`${comic.thumbnail.path.slice(5)}/portrait_fantastic.${comic.thumbnail.extension}`}
                alt="Not Available"
                className="comic-cover-img"
              /><br/>
              <div className="comic-title-link">
                <Link className="event-comic-link" to="/comic">
                {comic.title}
                </Link>
              </div>
            </div>
            <div className="event-btns">
              <button
                type="submit"
                id={`already-read-${index}`}
                name={`comic-${index}`}
                className="already-read-input"
                value={comic.title}
                onClick ={(e) => this.onAdd(
                  e,
                  comic.title,
                  'ALREADY READ',
                  comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                  comic.resourceURI,
                  this.props.loggedIn.username
                )}
              >
              ALREADY READ
              </button>

              <button
                type="submit"
                id={`bookmark-${index}`}
                name={`comic-${index}`}
                className="read-later-input"
                value={comic.title}
                onClick ={(e) => this.onAdd(
                  e,
                  comic.title,
                  'Read Later',
                  comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                  comic.resourceURI,
                  this.props.loggedIn.username
                )}
              >
              READ LATER
              </button>
            </div>
          </form>
        </li>
      );
    }

    return (
      <ul className="event-comic-list">
        {comic}
      </ul>
    );
  }

  render() {
    let imgUrl = '';
    let urls = '';

    if (this.props.eventResult.thumbnail) {
      imgUrl = this.props.eventResult.thumbnail.path.slice(5) + '/portrait_uncanny.' + this.props.eventResult.thumbnail.extension;
    }

    if (this.props.eventResult.urls) {
      urls = this.props.eventResult.urls.map((link, index) => link.url);
    }

    if (!imgUrl) {
      return null;
    }

    return (
      <section className="event-section">
        <div className="event-description">
          <a
            href="dashboard"
            className="back-home-from-comic"
          >
          Home
          </a>
          <a
            href="/"
            className="log-out-from-comic"
            onClick={() => this.logOut()}
          >
          Log Out
          </a>
          <img
            src={imgUrl}
            alt=""
            className="eventCoversPicture"
          />
          <div className="eventsInformation">
            <h1 className="eventsTitle">{this.props.eventResult.title}</h1>
            <p className="eventsText">{this.props.eventResult.description}</p>
            <div className="readMoreLink">
              <a
                href={urls[1]}
                target="_blank"
                className="new-link"
                rel="noopener noreferrer">
                Read More<span className="arrows"> >></span>
              </a>
            </div>
          </div>
        </div>

        <div className="event-character-container">
          <h2 className="event-character-header">CHARACTERS IN THIS EVENT</h2>
            <ul className="event-character-list">
              {this.renderCharacters()}
            </ul>
        </div>

        <div className="event-comic-container">
          <div className="lines">
            <h2 className="event-container-header">{this.props.eventResult.title} CORE ISSUES & TIE-IN ISSUES</h2>
          </div>
            <ul className="event-comic-list">
              {this.renderComics()}
            </ul>
            <div className="see-more-link">
              <a
                href={urls[0]}
                target="_blank"
                className="more-link"
                rel="noopener noreferrer">
                See More<span className="arrows"> >></span>
              </a>
            </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  eventResult: state.eventReducer.clickedEvent,
  eventCharacter: state.eventReducer.eventCharacter,
  eventComic: state.eventReducer.eventComic,
  loggedIn: state.auth.currentUser,
  characterLoading: state.eventReducer.eventCharacterLoading,
  comicLoading: state.eventReducer.eventComicLoading,
  protectedData: state.protectedData.data
});

export default requiresLogin()(connect(mapStateToProps)(Event));