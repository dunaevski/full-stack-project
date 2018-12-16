import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCiwjsVrkbkd34FXFYiC1-mlIpXPD__d8o",
    authDomain: "bukakke-bb9b2.firebaseapp.com",
    databaseURL: "https://bukakke-bb9b2.firebaseio.com",
    projectId: "bukakke-bb9b2",
    storageBucket: "bukakke-bb9b2.appspot.com",
    messagingSenderId: "865261879045",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
// firebase.firestore.setLogLevel('debug')
firestore.settings(settings);


export default firebase