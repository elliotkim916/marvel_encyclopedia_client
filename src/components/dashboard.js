import React from 'react';
import {connect} from 'react-redux';
import {clearAuthToken} from '../local-storage';
import {clearAuth} from '../actions/auth';
import requiresLogin from './requires-login';

import {fetchProtectedData} from '../actions/protected-data';
import {deleteData} from '../actions/protected-data';

import {findComic} from '../actions';
import {getNotesData} from '../actions/notes';
import {updateNotesData} from '../actions/notes';
import {deleteNotesData} from '../actions/notes';
import NotesDrawer from './notes-drawer';

import SearchForm from './search-form';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(getNotesData());
    }

    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken(); 
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "150px";
        document.getElementById("user-notes").style.marginLeft = "150px";
    }

    onEditNote(_id, title, note, event) {
        event.preventDefault();
        Object.assign(this.props.notes, {isEditing: true});
        console.log(this.props.notes);
        this.props.dispatch(updateNotesData(_id, title, note))
    }

    // onCancel(event) {
    //     event.preventDefault();
    //     Object.assign(this.props.updateNotes, {isEditing: false});
    // }

    onDeleteNote(_id, event) {
        event.preventDefault();
        const result = window.confirm('Are you sure?')
        if (result) {
            this.props.dispatch(deleteNotesData(_id))
            .then(data => window.location.reload());
        }
    }

    onDeleteComic(_id, event) {
        event.preventDefault();
        const result = window.confirm('Are you sure?')
        if (result) {
            this.props.dispatch(deleteData(_id))
            .then(data => window.location.reload());
        }
    }
   
    render() {
        console.log(this.props.notes);
        let notesResults = '';
        // let editNote = '';
        // if (this.props.updateNotes.isEditing === true) {
        //     editNote = this.props.notes.map(note => {
        //         return (
        //             <form>
        //                 <input 
        //                     type="text" 
        //                     placeholder={note.title}
        //                     name="updateNoteTitle"
        //                 />
        //                 <input 
        //                     type="text" 
        //                     placeholder={note.note}
        //                     name="updateNoteContent"
        //                 />
        //                 <button 
        //                     type="submit"
        //                     className="update-btn"
        //                     onSubmit={() => this.onEditNote(note._id, 'dang', 'again', note.event)}
        //                 >
        //                 Update
        //                 </button>
        //                 <button
        //                     className="cancel-btn"
        //                     onClick={() => Object.assign(this.props.updateNotes, {isEditing: false})}
        //                 >
        //                 Cancel
        //                 </button>
        //             </form>
        //         )
        //         })
        // } else 
        if (this.props.notes) {
            notesResults = this.props.notes.map(note => {
                // console.log(note.isEditing);
                if (note.isEditing === true) {
                    return <form>
                                <input 
                                    type="text" 
                                    placeholder={note.title}
                                    name="updateNoteTitle"
                                />
                                <input 
                                    type="text" 
                                    placeholder={note.note}
                                    name="updateNoteContent"
                                />
                                <button 
                                    type="button"
                                    className="update-btn"
                                    onClick={() => this.onEditNote(note._id, 'dang', 'again', note.event)}
                                >
                                Update
                                </button>
                                <button
                                    className="cancel-btn"
                                    onClick={() => Object.assign(this.props.updateNotes, {isEditing: false})}
                                >
                                Cancel
                                </button>
                            </form>           
                } else {
                    return <div
                                key={note._id}
                                className="notes-history"
                            >
                            <span className="note-title">{note.title}</span><br />
                            <span className="note-text">{note.note}</span><br />
                            <button
                                className="edit-note-btn"
                                onClick={(event) => this.onEditNote(note._id, note.title, note.note, event)}
                                // onClick={() => console.log('clicks')}
                            >
                            Edit
                            </button>
                            <button
                                className="remove-note-btn"
                                onClick={(event) => this.onDeleteNote(note._id, event)}
                            >
                            Delete
                            </button>
                        </div>
                    }
                });
            }

        let results = '';
        if (this.props.protectedData.data) {
        results = this.props.protectedData.data.map(item => {
            return  <div
                        key={item._id} 
                        className="read-history"
                    >
                        <div onClick={() => this.props.dispatch(findComic(item.resourceURI))}>
                            <img 
                                src={item.imgUrl.slice(5)} 
                                alt="Comic book cover" 
                            /><br />
                            <span className="title">{item.title}</span><br />
                            <span className="read">{item.read}</span>
                        </div>
                        <button 
                            onClick={(event) => this.onDeleteComic(item._id, event)}
                            className="remove-comic-btn"
                        >
                        <span className="x-icon">X</span>
                        </button>
                    </div>
        });
    }
        return (
            <div className="dashboard" id="user-notes">
                <span 
                    onClick={() => this.openNav()}
                    className="notes-btn"    
                >
                &#9776; Take Notes
                </span> 
                <a 
                    className="log-out"
                    onClick={() => this.logOut()}
                >
                    Log Out
                </a>  
                <SearchForm /><br/>
                <div className="dashboard-username">
                    Welcome {this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)}!
                </div>

                <h3 className="notes-header">Your Notes</h3>
                <div className="notes-data">
                    {notesResults}
                    {/* {editNote} */}
                </div>

                <h3 className="protected-data-header">Your Read & Unread Comics</h3>
                <div className="dashboard-protected-data">
                    {results}
                </div>
                <NotesDrawer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.auth.currentUser.username,
        protectedData: state.protectedData.data,
        notes: state.notes.notes.data,
        updateNotes: state.notes
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));