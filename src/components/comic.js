import React from 'react';
import './comic.css';

export default function Comic(props) {  
    let imgUrl = '';
    if (props.comic.thumbnail) {
        imgUrl = props.comic.thumbnail.path + '/portrait_fantastic.' + props.comic.thumbnail.extension;
    }
    
    let urls = '';
    if (props.comic.urls) { 
        urls = props.comic.urls.map((link, index) => link.url);
    }

    let character = '';
    if (props.comic.characters) {
        character = props.comic.characters.map((name, index) => 
            <li key={index}>
                {name.name}
            </li>
        );
    }

    let creator = '';
    if (props.comic.creators) {
        creator = props.comic.creators.map((person, role, index) => 
            <li key={index}>
                {person.name}
                <span>Role: {role.role}</span>
            </li>
        );
    }

    return (
        <section className="comic-section">
            <header>
                <img src={imgUrl} />
                <h2>{this.props.comic.title}</h2>
                <h3>{this.props.comic.issueNumber}</h3>
                <h3>{this.props.pageCount}</h3>
            </header>

            <div className="comic-description">
                <p>{this.props.comic.description}</p>

                <h3>Characters</h3>
                <ul>
                    {character}
                </ul>

                <h3>Creators</h3>
                <ul>
                    {creator}
                </ul>
            </div>

            <div className="comic-links">
                <a 
                    href={urls[0]} 
                    target="_blank"
                    className="new-comic-link"
                    rel="noopener noreferrer">
                    Comic Detail
                </a>
                <a 
                    href={urls[1]}
                    target="_blank"
                    className="new-comic-link"
                    rel="noopener noreferrer">
                    Purchase
                </a>
                <a 
                    href={urls[2]}
                    target="_blank"
                    className="new-comic-link"
                    rel="noopener noreferrer">
                    Reader
                </a>
                <a 
                    href={urls[3]}
                    target="_blank"
                    className="new-comic-link"
                    rel="noopener noreferrer">
                    In-App
                </a>  
            </div>        
        </section>
    );
}
