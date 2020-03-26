import React, { Component } from 'react';

export default class Note extends Component {
	constructor(props) {
		super(props);
		
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
		this.handleDeleteNote = this.handleDeleteNote.bind(this);
		this.handleTyping = this.handleTyping.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = {
			isClicked: false,
			note: '',
			item: ''
		}
	}
	
	handleDeleteItem(x) {
		const note = this.props.index;
		const resource = x;
		
		this.props.removeItem(note, resource);
	}
	
	handleDeleteNote(x) {
		this.props.removeNote(x);
	}
	
	handleTyping(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		})
	}
	
	handleSubmit(e){
		e.preventDefault();
		const newItem = {
			item: this.state.item,
		}
		this.props.addItem(this.props.index, newItem);
		this.setState({
			item: ''
		});
		
	}
	
	render() {
		return(
			<div className="note">
				<h2>
					{this.props.items.note}
						<i className="delete material-icons"
						onClick={() => {
								this.handleDeleteNote(this.props.index)
							}
						}>clear</i>
				</h2>
				<ul>
				{this.props.items.resources.map(
					(x, i) => {
						return(
							<li key={i}>
								{x.item}
								<i className="delete-item material-icons"
								onClick={() => {
										this.handleDeleteItem({i})
									}
								}>clear</i>
							</li>
						)
					}
				)}
				</ul>
				<form onSubmit={this.handleSubmit}>
					<input
						name="item"
						onChange={this.handleTyping}
						value={this.state.item}
						type="text"
						placeholder="Item"
						autoFocus
					/>
				</form>
			</div>
		)
	}
}