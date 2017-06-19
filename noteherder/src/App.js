import React, { Component } from 'react';

import './App.css';
import Main from './Main';

class App extends Component {
    constructor() {
        super()

        this.state = {
            notes: {
                'note-1': {
                    id: 'note-1',
                    title: "Citizens of distant epochs",
                    body: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?"
                },
                'note-2': {
                    id: 'note-2',
                    title: "Preserve and cherish that pale blue dot",
                    body: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!"
                },
                'note-3': {
                    id: 'note-3',
                    title: "Laws of physics",
                    body: "Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas",
                },
            },
        }
    }

    saveNote = (note) => {
        if (!note.id) {
            note.id = `note-${Date.now()}`
        }
        const notes = { ...this.state.notes }
        notes[note.id] = note
        this.setState({ notes })
    }

    render() {
        return (
            <div className="App">
                <Main notes={this.state.notes} saveNote={this.saveNote}/>
            </div>
        );
    }
}

export default App;
