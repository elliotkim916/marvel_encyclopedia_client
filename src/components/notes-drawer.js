import React from 'react';
import './notes-drawer.css';

export default class NotesDrawer extends React.Component {
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
                <form className="notes-form">
                    <input 
                        type="text" 
                        className="notes-title"
                        placeholder="Enter Note Title" 
                    />
                    <textarea 
                        className ="users-notes"
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