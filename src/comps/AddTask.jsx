import React, { Component } from 'react';
export default class AddTask extends Component {
	componentDidMount() {
		const { home } = this.props;
		this.setState({ text: '', home });
	}

	onAdd = () => {
		const { addTasktoList } = this.props;
		addTasktoList(this.state.text);
	};
	render() {
		return (
			<div className='text-center mt-5'>
				<input onChange={(event) => this.onTextChange(event)} />
				<button className='btn btn-primary mx-3' onClick={this.onAdd}>
					Add
				</button>
			</div>
		);
	}
	onTextChange(event) {
		this.setState({ text: event.target.value });
	}
}
