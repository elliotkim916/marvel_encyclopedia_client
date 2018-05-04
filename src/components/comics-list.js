import React from 'react';
import './comics-list.css';

export function ComicsList(props) {
    const allComics = props.allComics.map((comic, index) => (
        <li key={index}>
            <form class="comics-form">
                <a href="#">
                    <img 
                        src="https://i.pinimg.com/originals/65/9c/b5/659cb5c324b48b5b80cd3515e9998030.jpg" 
                        alt="picture of comic book issue" />
                    <p>Comic Book Issue Title</p>
                </a>
                {comic}
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