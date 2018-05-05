import React from 'react';
import {connect} from 'react-redux';
import './read-later-list.css';

export function ReadLaterList(props) {
    const unreadComics = props.unreadComics.map((comic, index) => (
        <li key={index}>
            <form>
                <a href="#read-later-list"><img src={comic.img} alt="read later" />
                <p>[<em>Placeholder for read later 1</em>]</p>
                </a>
                {comic.title}
                <button type="submit">Remove</button>
            </form>
        </li>
    ));

    return (
        <section>
            <header>
                <h3>Read For Later</h3>
            </header>

            <ul>
                {unreadComics}
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    unreadComics: state.unreadComics
});

export default connect(mapStateToProps)(ReadLaterList);