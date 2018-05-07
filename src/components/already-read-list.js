import React from 'react';
import {connect} from 'react-redux';
import './already-read-list.css';

export function AlreadyReadList(props) {
    const readComics = props.readComics.map((comic, index) => (
        <li key={index}>
            <form>
                <a href="#already-read-list">
                <img src ={comic.img} alt="comic book" />
                <p className="done-comic-title">{comic.title}</p>
                </a>
                <button type="submit">Remove</button>
            </form>
        </li>
    ));

    return (
    <section className="already-read-section">
        <header>
            <h3>Issues You've Read</h3>
        </header>

        <ul className="done-list">
            {readComics}
        </ul>
    </section>
    );
}

const mapStateToProps = state => ({
    readComics: state.search.readComics
});

export default connect(mapStateToProps)(AlreadyReadList);