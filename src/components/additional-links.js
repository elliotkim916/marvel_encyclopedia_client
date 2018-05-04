import React from 'react';
import './additional-links.css';

export function AdditionalLinks(props) {
    return (
        <section>
            <header>
                <h3>Additional Links</h3>
            </header>
        
            <a 
                href="https://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0" 
                target="_blank">
                Detail
            </a>
            <a 
                href="http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0" 
                target="_blank">
                Wiki
            </a>
            <a 
                href="https://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=fd39c1a1e2bfae2ff6b93140da9570c0" 
                target="_blank">
                Comics Link
            </a>
        </section>
    );
}