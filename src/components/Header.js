import React, { useContext } from 'react';
import { TasksContext } from '../data/TasksContext';
import { completeTasksNum } from '../utils/calculatePercentage';
import './Header.css';

function Header() {
	const [tasks] = useContext(TasksContext);

	return (
		<header className='header'>
			<img
				src='https://www.tech4goodawards.com/wp-content/uploads/2018/03/Do-IT-Logo-600px.png'
				className='header__logo'
				alt='logo'
			/>
			<div className='header__counters'>
				<div className='header__counter'>
					Total Tasks: <span>{tasks.length}</span>
				</div>
				<span></span>
				<div className='header__counter'>
					Finished Tasks: <span>{completeTasksNum(tasks)}</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
