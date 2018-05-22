import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {searchCharacter} from '../actions';
import './comic.css';

export class Comic extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let title = '';
        let issueNumber = '';
        let pageCount = '';
        let description = '';
        let imgUrl = '';
        let urls = '';
        let character = '';
        let creator = '';

        if (this.props.comicResult) {
            title = this.props.comicResult.title;
            issueNumber = this.props.comicResult.issueNumber;
            pageCount = this.props.comicResult.pageCount;
            description = this.props.comicResult.description;
        
            if (this.props.comicResult.thumbnail) {
                imgUrl = this.props.comicResult.thumbnail.path.slice(5) + '/portrait_uncanny.' + this.props.comicResult.thumbnail.extension;
            }
        
            if (this.props.comicResult.urls) { 
                urls = this.props.comicResult.urls.map((link, index) => link.url);
            }

            if (this.props.comicCharacter) {
                character = this.props.comicCharacter.map((character, index) => 
                    <li 
                        key={index} 
                        onClick={() => this.props.dispatch(searchCharacter(character.name))} 
                        className="character-name"
                    >
                        <img 
                            src={`${character.thumbnail.path.slice(5)}/portrait_fantastic.${character.thumbnail.extension}`} 
                            alt="character cover"
                        /><br/>    
                        {character.name}
                    </li>
                );
            }

            if (this.props.comicResult.creators) {
                creator = this.props.comicResult.creators.items.map((person, index) => 
                    <li key={index}>
                        <span>{person.name}, {person.role.charAt(0).toUpperCase() + person.role.slice(1)}</span>
                    </li>
                );
            }
        }
        
        return (
            <section className="comic-section">
                <a 
                    href="dashboard"
                    className="back-home-from-comic"
                >
                Home
                </a>
                <a 
                    href="login"
                    className="log-out-from-comic"
                    onClick={() => this.logOut}
                >
                Log Out
                </a>
                <header>
                    <img src={imgUrl} alt="Comic book cover"/>
                    <h2>{title}</h2>
                    <h3><span className="issue-number">Issue Number: {issueNumber}</span><span className="total-pages">Total Pages: {pageCount}</span></h3>
                </header>

                <div className="comic-description">
                    <div dangerouslySetInnerHTML={{__html:description}} className="description-container"></div>
                    {/* <div className="description-container">{description}</div> */}
                    <div className="character-container">
                        <h2 className="container-header">Characters In This Issue</h2>
                            <ul className="character-list">
                                {character}
                            </ul>
                    </div>

                    <div className="creator-container">
                        <h2 className="container-header">Creators</h2>
                            <ul>
                                {creator}
                            </ul>
                    </div>
                </div>

                <div className="comic-links">
                    <a 
                        href={urls[0]} 
                        target="_blank"
                        className="new-comic-link"
                        rel="noopener noreferrer">
                        Purchase Comic >>
                    </a>
                </div>         
            </section>
        );
    }
}

const mapStateToProps = state => ({
    comicResult: state.comicReducer.clickedComic,
    comicCharacter: state.comicCharacterReducer.comicCharacter
});

export default connect(mapStateToProps)(Comic);

