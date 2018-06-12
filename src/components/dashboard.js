import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {deleteData} from '../actions/protected-data';
import requiresLogin from './requires-login';
import SearchForm from './search-form';
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth';
import {findComic} from '../actions/comics';
import {Link} from 'react-router-dom';
import './dashboard.css';
import ironman_icon from '../images/ironman_icon.png';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    logOut(e) {
        e.preventDefault();
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    onDelete(id, e) {
        e.preventDefault();
        const result = window.confirm('Are you sure you want to delete?  If so, click OK.');
        if (result) {
            this.props.dispatch(deleteData(id));  
        }
    }

    renderResults() {
        if (this.props.protectedData.data) {
            if (this.props.protectedData.data.length > 0) {
                return <p className="protected-data-header">YOUR READ & UNREAD COMICS</p>; 
            }
        }
    }

    render() {
        let results = '';
        if (this.props.protectedData.data) {
        results = this.props.protectedData.data.map(item => {
            return  <div
                        key={item._id} 
                        className="read-history"
                    >
                        <div
                            className="comic-info" 
                        >
                            <img 
                                src={item.imgUrl.slice(5)} 
                                alt=""
                                className="cover-image" 
                                onClick={() => this.props.dispatch(findComic(item.resourceURI))}
                            />
                            <button 
                                onClick={(e) => this.onDelete(item._id, e)}
                                className="remove-comic-btn"
                            >
                            <i className="fa fa-trash-o" aria-hidden="true"></i> Remove Comic
                            </button>
                            <div className="comic-text" onClick={() => this.props.dispatch(findComic(item.resourceURI))}>
                                <Link className="title-link" to="/comic">{item.title}</Link><br/>
                                <span className="item-read">{item.read}</span>
                            </div>
                        </div>
                    </div>
            });
        }
    
        return (
            <div className="dashboard">
                <a
                    href="/"
                    className="log-out"
                    onClick={(e) => this.logOut(e)}
                >
                    Log Out
                </a>  
                <SearchForm /><br/>
                <img 
                    src={ironman_icon} 
                    alt="Iron Man Icon"
                    className="ironman-icon"
                />
                <div className="dashboard-username">
                    Welcome {this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)}!
                </div>
                <div className="lines">{this.renderResults()}</div>   
                <div className="dashboard-protected-data">
                    {results}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));