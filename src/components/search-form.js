import React from 'react';
import './search-form.css';
import {searchCharacter} from '../actions';
import {connect} from 'react-redux';

export class SearchForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        this.input.value.trim();
        this.props.dispatch(searchCharacter(this.input.value));
    }

    render() {
        return (
            <section>
                <header>
                    <h1>Marvel Encyclopedia</h1>
                </header>

                <form className="search-form" onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" placeholder="e.g. Thor" name="search-character" className="search-input" ref={input => this.input = input} />
                    <button type="submit" className="search-btn">Search</button>
                </form>
        </section>
        );
    }
}

const mapStateToProps = state => ({
    data: state.character.data,
});

export default connect(mapStateToProps)(SearchForm);