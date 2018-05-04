import React from 'react';
import './search-form.css';

export default function SearchForm(props) {
    return (
        <section>
            <header>
                <h1>Search for any Marvel character</h1>
            </header>

            <form class="search-form">
                <input type="text" placeholder="e.g. Thor" name="search-character" />
                <button type="submit">Search</button>
            </form>
      </section>
    );
}