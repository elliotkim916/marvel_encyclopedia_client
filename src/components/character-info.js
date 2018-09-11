import React from 'react';
import {connect} from 'react-redux';
import './character-info.css';

export class CharacterInfo extends React.Component {
  renderResults() {
    if (this.props.loading) {
      return <div className="loading">L O A D I N G . . . </div>
    }

    let imgUrl = '';
    if (this.props.character.thumbnail) {
      imgUrl = this.props.character.thumbnail.path.slice(5) + '/portrait_uncanny.' + this.props.character.thumbnail.extension;
    }
    
    let urls = '';
    if (this.props.character.urls) { 
      urls = this.props.character.urls.map((link) => link.url);
    }

    return (
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
    );
  }
    
  render() {
    return (
      <section className="character-info-section">
      <hr className="style10"/>
         {this.renderResults()}
      </section>
      );
    }
  }

const mapStateToProps = state => ({
  loading: state.characterReducer.characterLoading
});

export default connect(mapStateToProps)(CharacterInfo);

