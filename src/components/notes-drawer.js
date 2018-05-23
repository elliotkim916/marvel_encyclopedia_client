import React from 'react';
import {connect} from 'react-redux';
import './notes-drawer.css';
import {addNotesData} from '../actions/notes';

export class NotesDrawer extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        if (event.target.noteName.value || event.target.theNotes.value) {
            this.props.dispatch(addNotesData(
                event.target.noteName.value,
                event.target.theNotes.value,
                this.props.loggedIn.username
            ));
        }
        event.target.noteName.value = '';
        event.target.theNotes.value = '';
    }
    
    render() {
        const closeNav = () => {
            document.getElementById("mySidenav").style.width = "0px";
            document.getElementById("user-notes").style.marginLeft = "0px";
        }

        return (
            <div id="mySidenav" className="sidenav">
                <a className="closebtn" onClick={() => closeNav()}>&times;</a>
                <div className="notes-explainer">
                    <p className="notes-explainer-text">Take notes on your favorite Marvel characters! Write who they are, what comic books they were in, what comic events & crossovers they were a part of, & any other details you'd like to remember!</p>
                </div>
                <form 
                    className="notes-form"
                    onSubmit={event => this.onSubmit(event)}    
                >
                    <input 
                        type="text" 
                        className="notes-title"
                        placeholder="Enter Note Title"
                        name="noteName" 
                    />
                    <textarea 
                        className ="users-notes"
                        name="theNotes"
                        rows="30"
                        cols="18"
                        placeholder="i.e. Thor was a member of the Avengers and his greatest weapon was his hammer Mjolnir!  His brother is Loki but Loki is not Asgardian..." 
                    /><br />
                    <button 
                        type="submit"
                        className="save-btn"    
                    >
                    SAVE
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser
});

export default connect(mapStateToProps)(NotesDrawer);