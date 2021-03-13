import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBqaF4YytFaf8hVbN9wHTbpYCFrNLi-uFs',
	authDomain: 'todo-app-bb471.firebaseapp.com',
	projectId: 'todo-app-bb471',
	storageBucket: 'todo-app-bb471.appspot.com',
	messagingSenderId: '415801239681',
	appId: '1:415801239681:web:f5559f9fa279dba82b8580',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
