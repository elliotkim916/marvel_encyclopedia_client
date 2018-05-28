import React from 'react';
import {Link} from 'react-router-dom';
import avengers_icon from '../images/avengers_icon.png';
import captainAmerica_icon from '../images/captainAmerica_icon.png';
import captainmarvel_icon from '../images/captainmarvel_icon.png';
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
                    src={captainAmerica_icon} 
                    alt="" 
                />
                <p className="info-section-text">Marvel Encyclopedia allows you to go deep and learn about any Marvel Comics character with biographies, pictures, & issues of comic books the character was in.</p>
            </div>
      
            <div className="info explain">
                <img
                    src={avengers_icon}
                    alt=""
                />
                <p className="info-section-text">With every character search result, you can save the comics you want to read in the future & save the comics you have already read to your profile page.</p>
            </div>
    
            <div className="info explain">
                <img
                    src={captainmarvel_icon}
                    alt=""
                />
                <p className="info-section-text">Click on a comic or an event to learn more about the story, to see the characters that were involved, and see which comic book issues tie in with that particular event.</p>
            </div>
        </section>
    );
}

// "https://i.annihil.us/u/prod/marvel/i/mg/b/40/54adba004fe21.png"
// "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5a8c709253450a0e67a1a041/1519153307713/marvel-comics-reveals-their-new-avengers-superhero-roster2?format=750w"
// "https://lumiere-a.akamaihd.net/v1/images/usa_spider-man_chi_kid_arachnid_n_82f070c1.png?region=0%2C0%2C300%2C300"