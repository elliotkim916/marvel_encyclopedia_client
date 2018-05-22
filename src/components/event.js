import React from 'react';
import {connect} from 'react-redux';
import {searchCharacter} from '../actions';
import {findComic} from '../actions';
import './event.css';
import {addData} from '../actions/protected-data';

export function Event(props) {
    let imgUrl = '';
    let urls = '';
    let character = '';
    let comic = '';
    let creator = '';

    if (props.eventResult.thumbnail) {
        imgUrl = props.eventResult.thumbnail.path.slice(5) + '/portrait_uncanny.' + props.eventResult.thumbnail.extension;
    }

    if (props.eventResult.urls) {
        urls = props.eventResult.urls.map((link, index) => link.url);
    }

    if (props.eventCharacter) {
        character = props.eventCharacter.map((character, index) => 
            <li 
                key={index} 
                onClick={() => props.dispatch(searchCharacter(character.name))}
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

    if (props.eventComic) {
        comic = props.eventComic.map((comic, index) => 
            <li 
                key={index} 
                className="event-comic-name"    
            >
                <form className="event-comics-form">
                    <div
                        className="comic-container" 
                        onClick={() => props.dispatch(findComic(comic.resourceURI))}
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
                            onChange ={() => props.dispatch(addData(
                                comic.title, 
                                'Already Read', 
                                comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                                comic.resourceURI,
                                props.loggedIn.username
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
                            onChange ={() => props.dispatch(addData(
                                comic.title, 
                                'Read Later', 
                                comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                                comic.resourceURI,
                                props.loggedIn.username
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

    if (props.eventResult.creators) {
        creator = props.eventResult.creators.items.map((creator, index) => 
            <li key={index}>
                <span>{creator.name}, {creator.role.charAt(0).toUpperCase() + creator.role.slice(1)}</span>
            </li>
        );
    }

    return (
        <section className="event-section">
            <header>
                <img src={imgUrl} alt="Event cover" />
                <h2>{props.eventResult.title}</h2>
            </header>

            <div className="event-description">
                <p>{props.eventResult.description}</p><br />
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
                <h2 className="event-container-header">{props.eventResult.title} Core Issues & Tie-In Issues</h2>
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
        </section>
    );
}

const mapStateToProps = state => ({
    eventResult: state.eventReducer.clickedEvent,
    eventCharacter: state.eventCharacterReducer.eventCharacter,
    eventComic: state.eventComicReducer.eventComic,
    loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(Event);