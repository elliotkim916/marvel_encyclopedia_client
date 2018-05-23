import React from 'react';
import {connect} from 'react-redux';
import {searchCharacter} from '../actions';
import {findComic} from '../actions';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {addData} from '../actions/protected-data';
import './event.css';
import NotesDrawer from './notes-drawer';

export class Event extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "150px";
        document.getElementById("user-notes").style.marginLeft = "150px";
    }

    render() {
        let imgUrl = '';
        let urls = '';
        let character = '';
        let comic = '';
        let creator = '';

        if (this.props.eventResult.thumbnail) {
            imgUrl = this.props.eventResult.thumbnail.path.slice(5) + '/portrait_uncanny.' + this.props.eventResult.thumbnail.extension;
        }

        if (this.props.eventResult.urls) {
            urls = this.props.eventResult.urls.map((link, index) => link.url);
        }

        if (this.props.eventCharacter) {
            character = this.props.eventCharacter.map((character, index) => 
                <li 
                    key={index} 
                    onClick={() => this.props.dispatch(searchCharacter(character.name))}
                    className="event-character-name"
                >
                    <img 
                        src={`${character.thumbnail.path.slice(5)}/portrait_fantastic.${character.thumbnail.extension}`} 
                        alt="Character cover"
                    /><br />
                    {character.name}
                </li>
            );
        }

        if (this.props.eventComic) {
            comic = this.props.eventComic.map((comic, index) => 
                <li 
                    key={index} 
                    className="event-comic-name"    
                >
                    <form className="event-comics-form">
                        <div
                            className="comic-container" 
                            onClick={() => this.props.dispatch(findComic(comic.resourceURI))}
                        >
                            <img 
                                src={`${comic.thumbnail.path.slice(5)}/portrait_fantastic.${comic.thumbnail.extension}`} 
                                alt="Comic book cover"
                                className="comic-cover-img"
                            />
                            <h3 className="comic-title">
                            {comic.title}
                            </h3>
                        </div>
                        <div className="radio-btns">
                            <input 
                                type="radio" 
                                id={`already-read-${index}`} 
                                name={`comic-${index}`}
                                className="already-read-input"
                                value={comic.title} 
                                onChange ={() => this.props.dispatch(addData(
                                    comic.title, 
                                    'Already Read', 
                                    comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                                    comic.resourceURI,
                                    this.props.loggedIn.username
                                ))}
                            />
                            <label 
                                htmlFor={`already-read-${index}`}
                                className="already-read-label"
                            >
                                <span>Already Read</span>
                            </label>

                            <input 
                                type="radio" 
                                id={`bookmark-${index}`} 
                                name={`comic-${index}`}
                                className="read-later-input"
                                value={comic.title} 
                                onChange ={() => this.props.dispatch(addData(
                                    comic.title, 
                                    'Read Later', 
                                    comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                                    comic.resourceURI,
                                    this.props.loggedIn.username
                                ))} 
                            />
                            <label 
                                htmlFor={`bookmark-${index}`}
                                className="read-later-label"
                            >
                                <span>Read Later</span>
                            </label>
                        </div>
                    </form>
                </li>
            );
        }

        if (this.props.eventResult.creators) {
            creator = this.props.eventResult.creators.items.map((creator, index) => 
                <li key={index}>
                    <span>{creator.name}, {creator.role.charAt(0).toUpperCase() + creator.role.slice(1)}</span>
                </li>
            );
        }

        return (
            <section className="event-section" id="user-notes">
                <a 
                    href="dashboard"
                    className="back-home-from-comic"
                >
                Home
                </a>
                <a 
                    href="login"
                    className="log-out-from-comic"
                    onClick={() => this.logOut}
                >
                Log Out
                </a>
                <header>
                    <img src={imgUrl} alt="Event cover" />
                    <h2>{this.props.eventResult.title}</h2>
                </header>

                <div className="event-description">
                    <p>{this.props.eventResult.description}</p><br />
                    <span 
                        onClick={() => this.openNav()}
                        className="event-notes-btn"    
                    >
                    Take Notes &#62;&#62;
                    </span> 
                    <a 
                        href={urls[1]} 
                        target="_blank"
                        className="new-event-link"
                        rel="noopener noreferrer">
                        Read More >>
                    </a>
                </div>
                <div className="event-character-container">
                    <h2 className="event-container-header">Characters In This Event</h2>
                        <ul className="event-character-list">
                            {character}
                        </ul>
                </div>

                <div className="event-comic-container">
                    <h2 className="event-container-header">{this.props.eventResult.title} Core Issues & Tie-In Issues</h2>
                        <ul className="event-comic-list">
                            {comic}
                        </ul>
                        <a 
                            href={urls[0]} 
                            target="_blank"
                            className="new-event-link"
                            rel="noopener noreferrer">
                            See More >>
                        </a>
                </div>

                <div className="event-creator-container">
                        <h2 className="event-container-header">Creators</h2>
                            <ul className="event-creators-list">
                                {creator}
                            </ul>
                </div>
                <NotesDrawer />
            </section>
        );
    }
}
const mapStateToProps = state => ({
    eventResult: state.eventReducer.clickedEvent,
    eventCharacter: state.eventCharacterReducer.eventCharacter,
    eventComic: state.eventComicReducer.eventComic,
    loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Event);