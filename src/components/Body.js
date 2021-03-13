import React, { useContext, useState } from 'react';
import happy from '../assets/images/happy.png';
import Task from './Task';
import './Body.css';
import { TasksContext } from '../data/TasksContext';
import { calcualtePercentage } from '../utils/calculatePercentage';

function Body() {
	const [input, setInput] = useState('');
	const [tasks, , addTask] = useContext(TasksContext);

	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const timeNow = Date.now();
		const formattedDate = new Date().toDateString(timeNow);
		const task = {
			task: input,
			createdOn: formattedDate,
			isFinished: false,
		};
		addTask(task);

		setInput('');
	}

	return (
		<main className='body'>
			<div className='body__top'>
				<form className='body__form' onSubmit={handleSubmit}>
					<input
						type='text'
						className='body__form-input'
						value={input}
						onChange={handleChange}
						placeholder='Add a task...'
					/>
					<button type='submit' className='body__form-botton'>
						Add Task
					</button>
				</form>
				<div className='body__task-progress'>
					<p>
						Your progress:{' '}
						<span>{tasks.length ? Math.floor(calcualtePercentage(tasks)) : 0}%</span>
					</p>
				</div>
			</div>

			{!tasks.length ? (
				<div className='body__no-tasks'>
					<img src={happy} className='body__image' alt='happy img' />
					<h1>You have no task for now.</h1>
					<p>You're on top of it! YOHOO</p>
				</div>
			) : (
				<div className='body__tasks'>
					{tasks.map(task => (
						<Task key={task.id} {...task} />
					))}
				</div>
			)}
		</main>
	);
}

export default Body;
