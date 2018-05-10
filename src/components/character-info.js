import React from 'react';
import './character-info.css'

export default class CharacterInfo extends React.Component {
    render() {
        let imgUrl = '';
        if (this.props.character.thumbnail) {
            imgUrl = this.props.character.thumbnail.path + '/portrait_uncanny.' + this.props.character.thumbnail.extension;
        }
        
        return (
            <section className="character-info-section">
                <img 
                    src={imgUrl}
                    alt="searched character" 
                    className="searched-img" />
                <h2>{this.props.character.name}</h2>
                <p>{this.props.character.description}</p>
            </section>
        );
    }
}

