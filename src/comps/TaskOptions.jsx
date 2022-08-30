import React, { Component } from 'react';

export default class TaskOptions extends Component {
	render() {
		const { completed, left, all } = this.props;
		return (
			<div className='text-center mt-2'>
				<button className='btn btn-primary mx-1' onClick={all}>
					ALL
				</button>
				<button className='btn btn-primary mx-1' onClick={completed}>
					COMPLETED
				</button>
				<button className='btn btn-primary mx-1' onClick={left}>
					LEFT
				</button>
			</div>
		);
	}
}
