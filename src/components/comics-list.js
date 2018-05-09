import React from 'react';
import './comics-list.css';

export default function ComicsList(props) {
    let comicTitles = '';
    if (props.character.comics) {
        comicTitles = props.character.comics.items.map((comic, index) => (
            <li key={index}>
                <form className="comics-form">
                    <a href="#comic-searched">
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
            {props.character.comics ? <h2>Issues Available: {props.character.comics.available}</h2> : ''}
            
            <ul>
                {comicTitles}
            </ul>
        </section>
    );
}
