import React from 'react';
import './read-later-list.css';

export default function ReadLaterList(props) {
    const unreadComics = props.unreadComics.map((comic, index) => (
        <li key={index}>
            <form>
                <a href="#"><img src="//:0" alt="picture of read later 1" />
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