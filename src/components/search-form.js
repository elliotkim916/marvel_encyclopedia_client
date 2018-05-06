import React from 'react';
import './search-form.css';

export default function SearchForm(props) {
    return (
        <section>
            <header>
                <h1>Marvel Encyclopedia</h1>
            </header>

            <form className="search-form">
                <input type="text" placeholder="e.g. Thor" name="search-character" className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>
      </section>
    );
}