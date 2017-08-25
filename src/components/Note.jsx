import React from 'react'
import MdCreate from 'react-icons/lib/md/create'
import 'style-loader!./Note.css'

export default class Note extends React.Component {

    getNoteDOM(place, message, showNote) {
        let className = showNote ? "" : "hide";
        return (<blockquote 
                onBlur={(e) => this.saveNote(e, place)}
                ref={(el) => this.noteEl = el} 
                contentEditable={true} 
                className={"place-item-message " + className}>
                    {message}
                </blockquote>);
    }

    getCreateIconDOM(place, showCreateIcon) {
        let iconDOM = (
            <div onClick={ () => {
                      this.noteEl.focus();
                      this.props.showEmptyNote(place);
                  }
                }>
                <MdCreate 
                  className="float-left"
                  /> Add a note
            </div>
          )
        return showCreateIcon ? iconDOM : null;
    }

    render() {

        let place = this.props.place,
            note = place.note,
            showNote = note.isOpen || note.message,
            showCreateIcon = !note.isOpen && !note.message;

        return (
            <div>
                { this.getNoteDOM(place, note.message, showNote) }
                { this.getCreateIconDOM(place, showCreateIcon) }
            </div>
        );
    }

    saveNote(e, place) {
        this.props.editNoteMessage(place, e.target.textContent)
        this.props.hideEmptyNote(place);
    }
}
