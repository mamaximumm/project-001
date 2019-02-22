import firebase from 'firebase/app';
import 'firebase/storage';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA-QZjJwo2s6CQ9h3aasH2yYeU-Aj1LuJI",
  authDomain: "project-1-8d348.firebaseapp.com",
  databaseURL: "https://project-1-8d348.firebaseio.com",
  projectId: "project-1-8d348",
  storageBucket: "project-1-8d348.appspot.com",
  messagingSenderId: "415723464375"
};
firebase.initializeApp(config)

const storage = firebase.storage();

export{
  storage, firebase as default
}