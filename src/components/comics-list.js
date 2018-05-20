import React from 'react';
import {connect} from 'react-redux';
import './comics-list.css';
import {findComic} from '../actions';

export class ComicsList extends React.Component {
    render() {
        let urls = '';

        if (this.props.character.urls) { 
            urls = this.props.character.urls.map((link) => link.url);
        }

        let comicTitles = '';

        if (this.props.comic) {
            comicTitles = this.props.comic.map((comic, index) => (
                <li key={`comic-${index}`}>
                    <form className="comics-form">
                        <div
                            className="comic-container" 
                            onClick={() => this.props.dispatch(findComic(comic.resourceURI))}
                        >
                            <img 
                                src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`} 
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
                                // onChange ={() =>}
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
            ));
        }
        
        return (
            <section className="comics-list-section">
                <header>
                    <h2>Comic Book Appearances</h2>
                </header>
                {this.props.character.comics ? <h2>{this.props.character.comics.available} Issues Available</h2> : ''}
                
                <ul>
                    {comicTitles}
                </ul>
                <a 
                    href={urls[2]}
                    target="_blank"
                    className="comics-new-link"
                    rel="noopener noreferrer">
                    See More >>
                </a> 
            </section>
        );
    }
}

export default connect()(ComicsList);