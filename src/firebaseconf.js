import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCL80TAfFia2hd7t9Z65bdt2aKBFgcLXCw",
  authDomain: "cadastro-agendageeb.firebaseapp.com",
  databaseURL: "https://cadastro-agendageeb-default-rtdb.firebaseio.com",
  projectId: "cadastro-agendageeb",
  storageBucket: "cadastro-agendageeb.appspot.com",
  messagingSenderId: "45479950223",
  appId: "1:45479950223:web:eaf80b105b9a197f0fbdfa"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const store = fire.firestore();

export { store }