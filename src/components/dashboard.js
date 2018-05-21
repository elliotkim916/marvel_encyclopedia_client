import React from 'react';
import {connect} from 'react-redux';
import {fetchProtectedData} from '../actions/protected-data';
import {deleteData} from '../actions/protected-data';
import requiresLogin from './requires-login';
import SearchForm from './search-form';
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth';
import {findComic} from '../actions';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    // onDelete(event) {
    //     const _id = this.props.protectedData.data[0];
    //     const data = _id;
    //     this.props.dispatch(deleteData(data));
    //     window.location.reload();
    // }

    render() {
        // console.log(this.props.protectedData.data);
        let results = '';
        if (this.props.protectedData.data) {
        results = this.props.protectedData.data.map(item => {
            return  <div
                        key={item._id} 
                        className="read-history"
                    >
                        <div onClick={() => this.props.dispatch(findComic(item.resourceURI))}>
                            <img 
                                src={item.imgUrl} 
                                alt="Comic book cover" 
                            /><br />
                            <span className="title">{item.title}</span><br />
                            <span className="read">{item.read}</span>
                        </div>
                        <button 
                            onClick={() => this.props.dispatch(deleteData(item._id))}
                            className="remove-comic-btn"
                        >
                        <span className="x-icon">X</span>
                        </button>
                    </div>
        });
    }
        return (
            <div className="dashboard">
                <a 
                    href="login"
                    className="log-out"
                    onClick={() => this.logOut()}
                >
                    Log Out
                </a>  
                <SearchForm /><br/>
                <div className="dashboard-username">
                    Welcome {this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)}!
                </div>

                <h3 className="protected-data-header">Your Read & Unread Comics</h3>   
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