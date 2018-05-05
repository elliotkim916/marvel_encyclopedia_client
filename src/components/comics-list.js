import React from 'react';
import {connect} from 'react-redux';
import './comics-list.css';

export function ComicsList(props) {
    const allComics = props.allComics.map((comic, index) => (
        <li key={index}>
            <form class="comics-form">
                <a href="#comic-searched">
                    <img 
                        src={comic.img} 
                        alt="comic book issue" />
                    <p>{comic.title}</p>
                </a>
                
                <input type="radio" id="already-read" name="comic" />
                <label for="already-read"><span>Already Read</span></label>
                <input type="radio" id="bookmark" name="comic" />
                <label for="bookmark"><span>Bookmark</span></label>
            </form>
        </li>
    ));

    return (
        <ul>
            {allComics}
        </ul>
    );
}

const mapStateToProps = state => ({
    allComics: state.allComics
});

export default connect(mapStateToProps)(ComicsList);