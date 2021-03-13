import './App.css';
import Main from './pages/Main';
import { TasksProvider } from './data/TasksContext';

function App() {
	return (
		<div className='app'>
			<TasksProvider>
				<Main />
			</TasksProvider>
		</div>
	);
}

export default App;
