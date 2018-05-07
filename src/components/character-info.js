import React from 'react';
import {connect} from 'react-redux';
import './character-info.css';

export function CharacterInfo(props) {
    // console.log(props.characterInfo.character.thumbnail);
    const imgUrl = props.characterInfo.character.thumbnail;
    console.log(imgUrl);
    return (
        <section className="character-info-section">
            <img 
                src={imgUrl}
                alt="searched character" 
                className="searched-img" />
            <h2>{props.characterInfo.character.name}</h2>
            <p>{props.characterInfo.character.description}</p>
        </section>
    )
}

const mapStateToProps = state => ({
    characterInfo: state.character
});

export default connect(mapStateToProps)(CharacterInfo);