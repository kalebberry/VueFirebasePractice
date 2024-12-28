import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAvlOKW6aZZHIfISco0XucBa0bZdQxmWkY',
	authDomain: 'fir-sites-4b223.firebaseapp.com',
	projectId: 'fir-sites-4b223',
	storageBucket: 'fir-sites-4b223.firebasestorage.app',
	messagingSenderId: '784477985863',
	appId: '1:784477985863:web:ea8c0331eec6ff9174a562',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize Firebase Services
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
