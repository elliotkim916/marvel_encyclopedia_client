import React from 'react';
import {connect} from 'react-redux';
import './comics-list.css';
import {findComic} from '../actions';

export class ComicsList extends React.Component {
    render() {
        let comicTitles = '';
        if (this.props.character.comics) {
            comicTitles = this.props.character.comics.items.map((comic, index) => (
                <li key={`comic-${index}`}>
                    <form className="comics-form">
                        <h3 className="comic-title" onClick={() => this.props.dispatch(findComic(comic.resourceURI))}>{comic.name}</h3>
                        <input 
                            type="radio" 
                            id={`already-read-${index}`} 
                            name={`comic-${index}`}
                            className="already-read-input" 
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
                        />
                        <label 
                            htmlFor={`bookmark-${index}`}
                            className="read-later-label"
                        >
                            <span>Read Later</span>
                        </label>
                    </form>
                </li>
            ));
        }
        
        return (
            <section className="comics-list-section">
                <header>
                    <h2>Comics</h2>
                </header>
                {this.props.character.comics ? <h2>Issues Available: {this.props.character.comics.available}</h2> : ''}
                
                <ul>
                    {comicTitles}
                </ul>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    comicData: state.comic.comic
});

export default connect(mapStateToProps)(ComicsList);