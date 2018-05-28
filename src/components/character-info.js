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
                        alt="" 
                        className="searched-img" 
                    />
                    <div className="character-description">
                        <h2 className="character-name">{this.props.character.name.toUpperCase()}</h2>
                        <p className="character-text">{this.props.character.description}</p>
                        <div className="info-new-link">
                            <a 
                                href={urls[1]}
                                target="_blank"
                                className="new-link"
                                rel="noopener noreferrer">
                                Read More<span className="character-arrows"> >></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

