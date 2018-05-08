import React from 'react';
import {connect} from 'react-redux';
import './read-later-list.css';

export function ReadLaterList(props) {
    // const unreadComics = props.unreadComics.map((comic, index) => (
    //     <li key={index}>
    //         <form>
    //             <a href="#read-later-list">
    //                 <img src={comic.img} alt="read later" />
    //                 <p className="not-done-title">{comic.title}</p>
    //             </a>
               
    //             <button type="submit">Remove</button>
    //         </form>
    //     </li>
    // ));

    return (
        <section className="read-later-section">
            <header>
                <h3>Read For Later</h3>
            </header>

            <ul className="not-done-list">
                {/* {unreadComics} */}
            </ul>
        </section>
    );
}

const mapStateToProps = state => ({
    unreadComics: state.character
});

export default connect(mapStateToProps)(ReadLaterList);