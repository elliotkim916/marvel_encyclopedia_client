import React from 'react';
import {connect} from 'react-redux';
import './comics-list.css';

export function ComicsList(props) {
    const allComics = props.allComics.map((comic, index) => (
        <li key={index}>
            <form className="comics-form">
                <a href="#comic-searched">
                    <img 
                        src={comic.img} 
                        alt="comic book issue" />
                    <p className="comic-title">{comic.title}</p>
                </a>
                
                <input type="radio" id="already-read" name="comic" />
                <label htmlFor="already-read"><span>Already Read</span></label>
                <input type="radio" id="bookmark" name="comic" />
                <label htmlFor="bookmark"><span>Read Later</span></label>
            </form>
        </li>
    ));

    return (
        <section className="comics-list-section">
            <header>
                <h3>Comics List</h3>
            </header>

            <ul>
                {allComics}
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    allComics: state.search.allComics
});

export default connect(mapStateToProps)(ComicsList);