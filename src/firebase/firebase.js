import * as firebase from 'firebase';

// initializeApp
var config = {
    apiKey: "AIzaSyDZHyDe8kxYy_sB1Vky2UoM94cE9Ctny1M",
    authDomain: "expensify-ced07.firebaseapp.com",
    databaseURL: "https://expensify-ced07.firebaseio.com",
    projectId: "expensify-ced07",
    storageBucket: "expensify-ced07.appspot.com",
    messagingSenderId: "819298184146"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider= new firebase.auth.GoogleAuthProvider();


export { firebase,googleAuthProvider, database as default };
