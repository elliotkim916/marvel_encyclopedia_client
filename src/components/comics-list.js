import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {findComic} from '../actions/comics';
import {addData} from '../actions/protected-data';
import './comics-list.css';
import './dashboard.css';

export class ComicsList extends React.Component {
    onAdd(e, title, read, imgUrl, uri, username) {
        e.preventDefault();
        let already_exists = false;
        let comics_array = this.props.protectedData.data;
    
        comics_array.forEach(comic => {
        if (comic.title === title) {
            already_exists = true;
            window.alert(`The comic ${comic.title} has already been saved to Your Read & Unread Comics list.`);
        }
    });

        if (!already_exists) {
            this.props.dispatch(addData(title, read, imgUrl, uri, username));
            window.alert(`The comic ${title} has been saved to Your Read & Unread Comics list.`);
        }
    }

    onFind(e, uri) {
        e.preventDefault();
        this.props.dispatch(findComic(uri));
    }

    renderResults() {
        if (this.props.loading) {
             return <div className="loader">L O A D I N G . . . </div>
        }

        let comicTitles = '';
        if (this.props.comic) {
            comicTitles = this.props.comic.map((comic, index) => (
                <li key={`comic-${index}`} className="comic-history">
                    <form className="comics-form">
                        <div
                            className="comic-container" 
                            onClick={(e) => this.onFind(e, comic.resourceURI)}
                        >
                            <img 
                                src={`${comic.thumbnail.path.slice(5)}/portrait_fantastic.${comic.thumbnail.extension}`} 
                                alt=""
                                className="comic-cover-img"
                            /><br/>
                            <div className="comic-title-link">
                                <Link className="comic-title-link" to="/comic">
                                {comic.title}
                                </Link>
                            </div>
                        </div>
                        <div className="radio-btns">
                            <button 
                                type="submit" 
                                id={`already-read-${index}`} 
                                name={`comic-${index}`}
                                className="already-read-input" 
                                onClick={(e) => this.onAdd(
                                    e,
                                    comic.title, 
                                    'ALREADY READ', 
                                    comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                                    comic.resourceURI,
                                    this.props.loggedIn.username
                                )}
                            >
                            ALREADY READ
                            </button>

                            <button 
                                type="submit" 
                                id={`read-later-${index}`} 
                                name={`comic-${index}`}
                                className="read-later-input"
                                onClick={(e) => this.onAdd(
                                    e,
                                    comic.title, 
                                    'READ LATER', 
                                    comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension,
                                    comic.resourceURI,
                                    this.props.loggedIn.username
                                )} 
                            >
                            READ LATER
                            </button>
                        </div>
                    </form>
                </li>
            ));
        }

        return (
        <ul className="comics-list-all">
            {comicTitles}
        </ul>
        );
    }  
    
    render() {
        let urls = '';
        if (this.props.character.urls) { 
            urls = this.props.character.urls.map((link) => link.url);
        }

        return (
            <section className="comics-list-section">
                <header className="comics-list-header">
                <h2 className="h2">COMIC BOOK APPEARANCES</h2>
                </header>
                <ul className="comics-list-all">
                    {this.renderResults()}
                </ul>
                <div className="more-comics-link">
                    <a 
                        href={urls[2]}
                        target="_blank"
                        className="comics-new-link"
                        rel="noopener noreferrer">
                        See More<span className="arrows"> >></span>
                    </a>
                </div> 
            </section>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser,
    loading: state.characterReducer.comicLoading,
    protectedData: state.protectedData.data
});

export default connect(mapStateToProps)(ComicsList);