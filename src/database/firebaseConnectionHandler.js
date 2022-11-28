import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTtePx7j6-e1dupCpyoMKb4IYbTxLxR38",
    authDomain: "emilywken.firebaseapp.com",
    projectId: "emilywken",
    storageBucket: "emilywken.appspot.com",
    messagingSenderId: "403792026882",
    appId: "1:403792026882:web:dbe66d42181d3ca84c761b",
    measurementId: "G-PV258L2ML6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
