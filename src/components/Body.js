import React, { useState } from 'react';
import happy from '../assets/images/happy.png';
import Task from './Task';
import './Body.css';

function Body() {
	const [input, setInput] = useState('');

	function handleChange(e) {
		setInput(e.target.value);
	}

	return (
		<main className='body'>
			<div className='body__top'>
				<form className='body__form'>
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
						Your progress: <span>0%</span>
					</p>
				</div>
			</div>
			{/* <div className='body__no-tasks'>
				<img src={happy} className='body__image' alt='happy img' />
				<h1>You have no task for now.</h1>
				<p>You're on top of it! YOHOO</p>
			</div> */}
			<div className='body__tasks'>
				<Task />
				<Task />
				<Task />
			</div>
		</main>
	);
}

export default Body;
