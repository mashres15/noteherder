import React, { Component } from 'react'

import './NoteList.css'

const NoteList = (props) => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {Object.keys(props.notes).map((noteId) => {
          return <ListObject item={props.notes[noteId]} props={props} key={noteId} />
        })}
      </ul>
    </div>)
}

function ListObject({item, props}) {
  return (
    <li onMouseDown={()=> 
      props.callbackParent(item.id)}>
      <div className="note">
        <div className="note-title">{item.title}</div>
        <div className="note-body">
          <p>{item.body}</p>
        </div>
      </div>
    </li>
  )
}

export default NoteList