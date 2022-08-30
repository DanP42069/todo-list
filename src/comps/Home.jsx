import React, { Component } from 'react';
import initialTasks from '../Data/Tasks';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskOptions from './TaskOptions';
import { nanoid } from 'nanoid';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { tasks: [], status: 'ALL' };
	}
	componentDidMount() {
		this.setState({ tasks: initialTasks });
	}

	render() {
		let tasks = [];
		if (this.state.status === 'ALL') {
			tasks = this.state.tasks;
		} else if (this.state.status === 'COMPLETED') {
			tasks = this.state.tasks.filter((task) => {
				return task.completed;
			});
		} else if (this.state.status === 'LEFT') {
			tasks = this.state.tasks.filter((task) => {
				return !task.completed;
			});
		}
		return (
			<div>
				<AddTask addTasktoList={this.addTasktoList} />
				<TaskList tasks={tasks} toggle={this.toggleTaskComplete} />
				<TaskOptions completed={this.setCompleted} left={this.setLeft} all={this.setAll} />
			</div>
		);
	}
	addTasktoList = (text) => {
		const tasks = [...this.state.tasks];
		tasks.push({ id: nanoid(), text, completed: false });
		this.setState({ tasks });
		console.log(this.state);
	};
	setCompleted = () => {
		this.setState({ status: 'COMPLETED' });
	};
	setLeft = () => {
		this.setState({ status: 'LEFT' });
	};
	setAll = () => {
		this.setState({ status: 'ALL' });
	};
	toggleTaskComplete = (id) => {
		const tasks = [...this.state.tasks];
		tasks.forEach((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
		});
		this.setState({ tasks });
	};
}
