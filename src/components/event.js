import React from 'react';
import {connect} from 'react-redux';
import {searchCharacter} from '../actions';
import {findComic} from '../actions';
import './event.css';

export function Event(props) {
    console.log(props.eventResult);
    let imgUrl = '';
    let urls = '';
    let character = '';
    let comic = '';
    let creator = '';

    if (props.eventResult.thumbnail) {
        imgUrl = props.eventResult.thumbnail.path + '/portrait_uncanny.' + props.eventResult.thumbnail.extension;
    }

    if (props.eventResult.urls) {
        urls = props.eventResult.urls.map((link, index) => link.url);
    }

    if (props.eventResult.characters) {
        character = props.eventResult.characters.items.map((name, index) => 
            <li key={index} onClick={() => props.dispatch(searchCharacter(name.name))}>
                {name.name}
            </li>
        );
    }

    if (props.eventResult.comics) {
        comic = props.eventResult.comics.items.map((comic, index) => 
            <li key={index} onClick={() => props.dispatch(findComic(comic.resourceURI))}>
                {comic.name}
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
                {props.eventResult.description}
            </div>

            <div className="event-character-container">
                <h3 className="event-container-header">Characters</h3>
                    <ul className="event-character-list">
                        {character}
                    </ul>
            </div>

            <div className="event-comic-container">
                <h3 className="event-container-header">Comics</h3>
                    <ul className="event-comic-list">
                        {comic}
                    </ul>
            </div>

             <div className="event-creator-container">
                    <h3 className="event-container-header">Creators</h3>
                        <ul className="event-creators-list">
                            {creator}
                        </ul>
            </div>

            <div className="event-links">
                <a 
                    href={urls[0]} 
                    target="_blank"
                    className="new-event-link"
                    rel="noopener noreferrer">
                    Detail
                </a>
                <a 
                    href={urls[1]} 
                    target="_blank"
                    className="new-event-link"
                    rel="noopener noreferrer">
                    Marvel Universe Wiki
                </a>
            </div>  
        </section>
    );
}

const mapStateToProps = state => ({
    eventResult: state.event.event
});

export default connect(mapStateToProps)(Event);