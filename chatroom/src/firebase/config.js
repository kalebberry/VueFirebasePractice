import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: 'fir-sites-4b223.firebasestorage.app',
	messagingSenderId: '784477985863',
	appId: '1:784477985863:web:6b1b3d2f5670ad3d74a562',
};

//init firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

export { projectFirestore, timestamp, projectAuth };
