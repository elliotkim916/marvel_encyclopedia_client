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
                    <div 
                        key={index} 
                        onClick={() => this.props.dispatch(searchCharacter(character.name))} 
                        className="marvelComicsCharacter"
                    >
                        <img 
                            src={`${character.thumbnail.path.slice(5)}/portrait_fantastic.${character.thumbnail.extension}`} 
                            alt=""
                            className="cover-art"
                        /><br/>    
                        <h3 className="characterName">{character.name}</h3>
                    </div>
                );
            }
        }
        
        return (
            <section className="comic-section">
                <div className="comic-book-information">
                    <a 
                        href="dashboard"
                        className="back-home-from-comic"
                    >
                    Home
                    </a>
                    <a 
                        href="/"
                        className="log-out-from-comic"
                        onClick={() => this.logOut()}
                    >
                    Log Out
                    </a>
                    
                    <img 
                        src={imgUrl} 
                        alt="Comic book cover"
                        className="cover-art"    
                    />
                    <div className="comicIssueDetails">
                        <h2 className="comicBookTitle">{title}</h2>
                        <h3 className="issueInformation"><span className="issue-number">ISSUE #{issueNumber}</span><span className="total-pages">TOTAL PAGES: {pageCount}</span></h3>
                        <div dangerouslySetInnerHTML={{__html:description}} className="description-container"></div>
                        <div className="new-comic-link">
                            <a 
                                href={urls[0]} 
                                target="_blank"
                                className="new-link"
                                rel="noopener noreferrer">
                                Purchase Comic<span className="arrows"> >></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="character-container">
                    <h2 className="container-header">CHARACTERS IN THIS ISSUE</h2>
                        <ul className="character-list">
                            {character}
                        </ul>
                </div>    
            </section>
        );
    }
}

const mapStateToProps = state => ({
    comicResult: state.comicReducer.clickedComic,
    comicCharacter: state.comicCharacterReducer.comicCharacter,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Comic);

