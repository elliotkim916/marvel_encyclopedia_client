import React from 'react';
import {connect} from 'react-redux';
import './search-form.css';
import {searchCharacter} from '../actions/characters';

export class SearchForm extends React.Component {
    componentDidMount() {
        this.input.focus();
    }

    onSubmit(e) {
        e.preventDefault();
        this.input.value.trim();
        this.props.dispatch(searchCharacter(this.input.value));
        this.input.value = '';
    }
    
    render() {
        return (
            <section className="search-form-section">
                <header className="search-form-header">
                    <h1 className="form-header-text">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/2000px-MarvelLogo.svg.png" 
                            alt="Marvel Encyclopedia"
                            className="marvel-logo"
                        /> 
                        <div className="header-text">ENCYCLOPEDIA</div>
                    </h1>
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
                        aria-label="Search character"
                        required 
                    /><span className="focus-border"></span>
                    <button 
                        type="submit" 
                        className="search-btn"
                        aria-label="Search"
                    >
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
        </section>
        );
    }
}

export default connect()(SearchForm);