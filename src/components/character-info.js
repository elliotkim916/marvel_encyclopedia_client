import React from 'react';
import './character-info.css';

export function CharacterInfo(props) {
    return (
        <section>
            <img 
                src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg" 
                alt="picture of searched character" 
                class="searched-img" />
            <h3>Thor</h3>
            <p>Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et, congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</p>
        </section>
    )
}