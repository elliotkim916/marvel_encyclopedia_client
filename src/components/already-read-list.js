import React from 'react';
import './already-read-list.css';

export default function AlreadyReadList(props) {
    const readComics = props.readComics.map((comic, index) => (
        <li key={index}>
            <form>
                <a href="#already-read-list">
                <img src ="//:0" alt="comic book" />
                <p>[<em>Placeholder for comic book title</em>]</p>
                </a>
                {comic}
                <button type="submit">Remove</button>
            </form>
        </li>
    ));

    return (
    <section>
        <header>
            <h3>Issues You've Read</h3>
        </header>

        <ul>
            {readComics}
        </ul>
    </section>
    );
}