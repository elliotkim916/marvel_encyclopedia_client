import React from 'react';
import './additional-links.css';

export default function AdditionalLinks(props) {
    console.log(props.character.urls);
    let urls = '';
    if (props.character.urls) { 
        urls = props.character.urls.map((link) => link.url);
    }
    
    return (
        <section className="additional-links-section">
            <header>
                <h2>Additional Resources</h2>
            </header>
         
            <a 
                href={urls[0]} 
                target="_blank"
                className="new-link"
                rel="noopener noreferrer">
                Character Detail
            </a>
            <a 
                href={urls[1]}
                target="_blank"
                className="new-link"
                rel="noopener noreferrer">
                Marvel Universe Wiki
            </a>
            <a 
                href={urls[2]}
                target="_blank"
                className="new-link"
                rel="noopener noreferrer">
                Comics
            </a> 
        </section>
    );
}
