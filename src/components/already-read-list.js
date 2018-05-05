import React from 'react';
import {connect} from 'react-redux';
import './already-read-list.css';

export function AlreadyReadList(props) {
    const readComics = props.readComics.map((comic, index) => (
        <li key={index}>
            <form>
                <a href="#already-read-list">
                <img src ={comic.img} alt="comic book" />
                <p>{comic.title}</p>
                </a>
                <button type="submit">Remove</button>
            </form>
        </li>
    ));

    return (
    <section class="already-read-section">
        <header>
            <h3>Issues You've Read</h3>
        </header>

        <ul>
            {readComics}
        </ul>
    </section>
    );
}

const mapStateToProps = state => ({
    readComics: state.readComics
});

export default connect(mapStateToProps)(AlreadyReadList);