import React from 'react';
import './info-section.css';

export default function InfoSection(props) {
    return (
        <section>
            <div className="info title">
            <header>
                <h1>Marvel Encyclopedia</h1>
                <h2>Your source for all things Marvel.</h2>
            </header>
            </div>

            <div className="info">
                <header>
                    <h3>Search and learn more about any Marvel character</h3>
                </header>
                <p className="info-section-text">[<em>Placeholder for img of Marvel character</em>]</p>
                <p className="info-section-text">New to the Marvel Cinematic Universe?  Saw a new Marvel show and have no idea who that character is?  Marvel Encyclopedia allows you to go deep and learn about any Marvel Comics character with biographies, pictures, & issues of comic books the character was in.</p>
            </div>
      
            <div className="info">
                <header>
                    <h3>Go deep & take in only what you want</h3>
                </header>
                <p className="info-section-text">[<em>Placeholder for img of Marvel Character writing/reading</em>]</p>
                <p className="info-section-text">Every Marvel character has a rich history and is involved in many stories created by numerous authors.  If there are certain details you want to take away from your search, you can take notes, save that information, and look back at what you want to remember.</p>
            </div>
      
            <div className="info">
                <header>
                    <h3>Keep track of the issues you've read & want to read later</h3>
                </header>
                <p className="info-section-text">[<em>Placeholder for img of Marvel Character</em>]</p>
                <p className="info-section-text">With every character search, Marvel Encyclopedia provides you with the various comic book issues the character was in.  You can save which issues you want to check out in the future, and can check off which issues you have already read.</p>
            </div>
        </section>
    );
}