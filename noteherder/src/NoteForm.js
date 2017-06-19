import React, { Component } from 'react';

import './NoteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.props.note(),
    }
    this.updateForm = this.updateForm.bind(this)
  }

  getUpdate(newNote){
    this.setState({note: newNote})
  }

  updateForm(ev) {
    const note = { ...this.state.note }
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    )
  }

  blankNote = () => {
        return {
            id: null,
            title: '',
            body: '',
        }
    }

  newForm = () => {
     this.setState({ note: this.blankNote() })
  }

  render() {
    return (
      <div className="NoteForm">
        <form>
          <p>
            <input type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.updateForm} />
          </p>
          <p>
            <textarea name="body"
              cols="30" rows="10"
              placeholder="Just start typing..."
              value={this.state.note.body}
              onChange={this.updateForm}>
            </textarea>
          </p>
        </form>
      </div>
    )
  }
}

export default NoteForm