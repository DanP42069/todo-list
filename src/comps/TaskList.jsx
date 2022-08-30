import React, { Component } from 'react';
export default class TaskList extends Component {
	render() {
		const { tasks, toggle } = this.props;

		return tasks.map((task) => {
			return (
				<div key={task.id} className='pretty p-default text-center mt-3'>
					<input
						type='checkbox'
						defaultChecked={task.completed}
						onClick={() => toggle(task.id)}
					/>
					<div className='state p-oprimary-o'>
						<label>{task.text}</label>
					</div>
				</div>
			);
		});
	}
}
