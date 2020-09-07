import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBaJx4dDq1o7M6Lb9qRl-wczZJWU0reyGk',
  authDomain: 'salidas-app.firebaseapp.com',
  databaseURL: 'https://salidas-app.firebaseio.com',
  projectId: 'salidas-app',
  storageBucket: 'salidas-app.appspot.com',
  messagingSenderId: '140013182249',
  appId: '1:140013182249:web:681643cb57ccc062aaab38',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
