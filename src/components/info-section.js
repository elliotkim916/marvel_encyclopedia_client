import React from 'react';
import {Link} from 'react-router-dom';
import './info-section.css';

export default function InfoSection(props) {
    return (
        <section className="information-section">
            <div className="info title">
                <header className="info-section-header">
                    <h1 className="marvel-title-header">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png" 
                            alt="Marvel Encyclopedia"
                            className="marvel-logo"
                        /><div className="header-second-word">ENCYCLOPEDIA</div>
                    </h1>
                    <h2 className="landing-pg-header">Your source for all things Marvel.</h2>
                    
                    <Link to="/register">
                        <button className="sign-up-button">
                        SIGN UP HERE
                        </button>
                    </Link>
                </header>
            </div>

            <div className="info explain">
                <img 
                    src="https://lumiere-a.akamaihd.net/v1/images/usa_spider-man_chi_kid_arachnid_n_82f070c1.png?region=0%2C0%2C300%2C300" 
                    alt="" 
                />
                <p className="info-section-text">New to the Marvel Cinematic Universe?  Saw a new Marvel show and have no idea who that character is?  Marvel Encyclopedia allows you to go deep and learn about any Marvel Comics character with biographies, pictures, & issues of comic books the character was in.</p>
            </div>
      
            <div className="info explain">
                <img
                    src="https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5a8c709253450a0e67a1a041/1519153307713/marvel-comics-reveals-their-new-avengers-superhero-roster2?format=750w"
                    alt=""
                    className="comic-front-cover"
                />
                <p className="info-section-text">With every character search, Marvel Encyclopedia provides you with the various comic book issues the character was in.  You can save which issues you want to read in the future and save which issues you have already read.</p>
            </div>
    
            <div className="info explain">
                <img
                    src="https://i.annihil.us/u/prod/marvel/i/mg/b/40/54adba004fe21.png"
                    alt=""
                    className="dr-strange-img"
                />
                <p className="info-section-text">Every Marvel character has a rich history and is involved in many stories.  Click on a comic or an event to learn more about the story, to see the characters that were involved, and see which comic book issues tie in with that particular event.</p>
            </div>
        </section>
    );
}