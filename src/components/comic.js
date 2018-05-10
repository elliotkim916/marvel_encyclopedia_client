import React from 'react';
import {connect} from 'react-redux';
import './comic.css';

export function Comic(props) {
    let title = '';
    let issueNumber = '';
    let pageCount = '';
    let description = '';
    let imgUrl = '';
    let urls = '';
    let character = '';
    let creator = '';

    if (props.comicResult) {
        console.log(props.comicResult);
        title = props.comicResult.title;
        issueNumber = props.comicResult.issueNumber;
        pageCount = props.comicResult.pageCount;
        description = props.comicResult.description;
       
        if (props.comicResult.thumbnail) {
            imgUrl = props.comicResult.thumbnail.path + '/portrait_uncanny.' + props.comicResult.thumbnail.extension;
        }
       
        if (props.comicResult.urls) { 
            urls = props.comicResult.urls.map((link, index) => link.url);
        }

        if (props.comicResult.characters) {
            character = props.comicResult.characters.items.map((name, index) => 
                <li key={index}>
                    {name.name}
                </li>
            );
        }

        if (props.comicResult.creators) {
            creator = props.comicResult.creators.items.map((person, index) => 
                <li key={index}>
                    <span>{person.name}, {person.role.charAt(0).toUpperCase() + person.role.slice(1)}</span>
                </li>
            );
        }
    }
      
    return (
        <section className="comic-section">
            <header>
                <img src={imgUrl} alt="Comic book cover"/>
                <h2>{title}</h2>
                <h3>Issue Number: {issueNumber}</h3>
                <h3>Total Pages: {pageCount}</h3>
            </header>

            <div className="comic-description">
                <div dangerouslySetInnerHTML={{__html:description}} className="description-container"></div>

                <div className="character-container">
                    <h3 className="container-header">Characters</h3>
                        <ul>
                            {character}
                        </ul>
                </div>

                <div className="creator-container">
                    <h3 className="container-header">Creators</h3>
                        <ul>
                            {creator}
                        </ul>
                </div>
            </div>

            <div className="comic-links">
                <a 
                    href={urls[0]} 
                    target="_blank"
                    className="new-comic-link"
                    rel="noopener noreferrer">
                    Purchase Comic
                </a>
            </div>         
        </section>
    );
}

const mapStateToProps = state => ({
    comicResult: state.comic.comic 
});

export default connect(mapStateToProps)(Comic);
