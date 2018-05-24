import React from 'react';
import './character-info.css'

export default class CharacterInfo extends React.Component {
    render() {
        let imgUrl = '';
        if (this.props.character.thumbnail) {
            imgUrl = this.props.character.thumbnail.path.slice(5) + '/portrait_uncanny.' + this.props.character.thumbnail.extension;
        }
        
        let urls = '';
        if (this.props.character.urls) { 
            urls = this.props.character.urls.map((link) => link.url);
        }

        return (
            <section className="character-info-section">
            <div>
                <img 
                    src={imgUrl}
                    alt="searched character" 
                    className="searched-img" />
                <h2>{this.props.character.name}</h2>
                <p>{this.props.character.description}</p>
                <a 
                    href={urls[1]}
                    target="_blank"
                    className="info-new-link"
                    rel="noopener noreferrer">
                    Read More >>
                </a>
            </div>
            </section>
        );
    }
}

