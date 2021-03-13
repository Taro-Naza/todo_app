// import { loadTasks } from '../api/taskApi';

import React, { createContext, useEffect, useState } from 'react';
import db from '../api/firebase';

export const TasksContext = createContext();

export function TasksProvider({ children }) {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		db.collection('tasks').onSnapshot(snapshot => {
			const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
			setTasks(data);
		});
	}, []);

	function addTask(task) {
		db.collection('tasks')
			.add(task)
			.then(docRef => {
				console.log('Document written with ID: ', docRef.id);
			})
			.catch(error => {
				console.error('Error adding document: ', error);
			});
	}

	function removeTask(id) {
		db.collection('tasks')
			.doc(id)
			.delete()
			.then(() => {
				console.log('Document successfully deleted!');
			})
			.catch(error => {
				console.error('Error removing document: ', error);
			});
	}

	function completeTask(id) {
		db.collection('tasks').doc(id).update({
			isFinished: true,
		});
	}

	return (
		<TasksContext.Provider value={[tasks, setTasks, addTask, removeTask, completeTask]}>
			{children}
		</TasksContext.Provider>
	);
}
