import React, { useContext } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import './Task.css';
import { TasksContext } from '../data/TasksContext';

function Task({ id, task, createdOn, isFinished }) {
	const [, , , removeTask, completeTask] = useContext(TasksContext);

	function handleRemoveTask() {
		removeTask(id);
	}

	function handleCompletedTask() {
		completeTask(id);
	}

	return (
		<div className='task'>
			<h2 className='task__name'>{task}</h2>●<p className='task__create-date'>{createdOn}</p>●
			<p className='task__status'>{isFinished ? 'Completed' : 'In-progress'}</p>
			<button className='task__button'>
				{!isFinished && (
					<DoneIcon className='task__icon-complete' onClick={handleCompletedTask} />
				)}
			</button>
			<button className='task__button'>
				<CloseIcon className='task__icon-remove' onClick={handleRemoveTask} />
			</button>
		</div>
	);
}

export default Task;
