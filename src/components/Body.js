import React from 'react';
import happy from '../assets/images/happy.png';
import './Body.css';

function Body() {
	return (
		<main className='body'>
			<div className='body__no-tasks'>
				<img src={happy} className='body__image' alt='happy img' />
				<h1>You have no task for now.</h1>
				<p>You're on top of it! YOHOO</p>
			</div>
			<div className='body__tasks'>{/* Task component */}</div>
		</main>
	);
}

export default Body;
