import React from 'react';
import {connect} from 'react-redux';
import './search-form.css';
import {searchCharacter} from '../actions';

export class SearchForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.input.value.trim();
        this.props.dispatch(searchCharacter(this.input.value));
        this.input.value = '';
    }

    render() {
        return (
            <section className="search-form-section">
                <header>
                    <h1>Marvel Encyclopedia</h1>
                </header>

                <form 
                    className="search-form" 
                    onSubmit={(e) => this.onSubmit(e)}
                >
                    <input 
                        type="text" 
                        placeholder="e.g. Thor" 
                        name="search-character" 
                        className="search-input" 
                        ref={input => this.input = input} 
                    />
                    <button 
                        type="submit" 
                        className="search-btn"
                    >
                    Search
                    </button>
                </form>
        </section>
        );
    }
}

export default connect()(SearchForm);