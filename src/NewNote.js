import React, { Component } from 'react';

export default class NewNote extends Component {
	constructor() {
		super();
		this.state = {
			note: ''
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTypingNew = this.handleTypingNew.bind(this);
	}

	handleTypingNew(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	handleSubmit(e){
		e.preventDefault();
		if (this.state.note === '') {
			console.log('Please enter a note.');
		} else {
			this.props.addnote(this.state.note);
			this.setState({note: ''});
		}
	}
	
	render() {
		return (
			<form className="new-form" onSubmit={this.handleSubmit}>
				<input
					name="note"
					onChange={this.handleTypingNew}
					value={this.state.note}
					type="text"
					placeholder="Start a new note"
					autoFocus
				/>
			</form>
		)
	}
}