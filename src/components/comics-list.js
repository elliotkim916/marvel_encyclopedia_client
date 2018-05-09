import React from 'react';
import {connect} from 'react-redux';
import './comics-list.css';
import {findComic} from '../actions';

export class ComicsList extends React.Component {
    render() {
    let comicTitles = '';
    if (this.props.character.comics) {
        comicTitles = this.props.character.comics.items.map((comic, index) => (
            <li key={index}>
                <form className="comics-form">
                    <a href="#comic-searched" onClick={this.props.dispatch(findComic(comic.resourceURI))}>
                        <p className="comic-title">{comic.name}</p>
                    </a>
                    
                    <input type="radio" id="already-read" name="comic" />
                    <label htmlFor="already-read"><span>Already Read</span></label>
                    <input type="radio" id="bookmark" name="comic" />
                    <label htmlFor="bookmark"><span>Read Later</span></label>
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
    comicData: state.comic.data
});

export default connect(mapStateToProps)(ComicsList);