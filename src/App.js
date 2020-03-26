import React, { Component } from 'react';
import './App.css';
import Note from './Note';
import NewNote from './NewNote';
import resources from './resources.json';

class App extends Component {
    constructor(props) {
        super(props);
                
        this.state = {
            note: '',
            resources: resources,
        }
        
        this.addnewItem = this.addnewItem.bind(this);
        this.addNewnote = this.addNewnote.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }
    
    addNewnote(note) {
        const tempState = this.state;
        const newNote = {
            note: note,
            resources: []
        }
        tempState.resources.push(newNote);
        this.setState(tempState);
        console.log(newNote);
    }
    removeNote(note) {
        delete this.state.resources[note];
		this.setState(this.state);
	}
    
    addnewItem(note, x){
        let tempState = this.state;
        tempState.resources[note].resources.push(x);
        this.setState(tempState);
    }
    removeItem(note, resource) {
        delete this.state.resources[note].resources[resource.i];
        this.setState(this.state);
    }
    
    render() {
        return (
            <div>
                <NewNote addnote={this.addNewnote}/>
                <br />
                {this.state.resources.map(
                    (x, index) => {
                        return (
                            <Note
                                index={index}
                                addItem={this.addnewItem}
                                removeItem={this.removeItem}
                                removeNote={this.removeNote}
                                items={x}
                                key={index}
                            />
                        )
                    }
                )}
            </div>
        );
    }
}

export default App;
