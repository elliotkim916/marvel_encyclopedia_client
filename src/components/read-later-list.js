import React from 'react';
import './read-later-list.css';

export default function ReadLaterList(props) {
    const unreadComics = props.unreadComics.map((comic, index) => (
        <li key={index}>
            <form>
                <a href="#read-later-list"><img src="//:0" alt="read later" />
                <p>[<em>Placeholder for read later 1</em>]</p>
                </a>
                {comic}
                <button type="submit">Remove</button>
            </form>
        </li>
    ));

    return (
        <ul>
            {unreadComics}
        </ul>
    );
}