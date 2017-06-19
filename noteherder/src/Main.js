import React, { Component } from 'react';

import NoteForm from './NoteForm';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : null
        }
    }

    onListClick = (id) => {
        this.state.id = id
        this.note()
    }

    blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }

    note = () => {
        if (this.state.id === null) {
            return this.blankNote()
        }
        else {
            Object.keys(this.props.notes).map((noteId) => {
                if (noteId === this.state.id) {
                    this.refs.noteForm.getUpdate({
                        id: this.state.id,
                        title: this.props.notes[noteId].title,
                        body: this.props.notes[noteId].body,
                    })
                }
            })
        }
    }
    render() {
        return (
            <div className="Main">
                <Sidebar />
                <NoteList notes={this.props.notes} callbackParent={(id) => this.onListClick(id)} />
                <NoteForm saveNote={this.props.saveNote} notes={this.props.notes} note={() => this.note()} ref="noteForm" />

            </div>
        )
    }
}

export default Main
