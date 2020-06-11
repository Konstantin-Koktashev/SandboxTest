import { createFirestoreInstance } from "redux-firestore";
export const  firebase = {
  apiKey: "AIzaSyBEwnS_Fn_B4UtRRG0RtDN5ChWxqkEV0Tg",
  authDomain: "trello-9157b.firebaseapp.com",
  databaseURL: "https://trello-9157b.firebaseio.com",
  projectId: "trello-9157b",
  storageBucket: "trello-9157b.appspot.com",
  messagingSenderId: "556555971382",
  appId: "1:556555971382:web:651c424aa09099cae62197",
  measurementId: "G-J4SXR8RMQM"
  };

  export const config = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableLogging: false
  }
  
export const reduxFirebase = {
  firebase,
  config,
  createFirestoreInstance // <- needed if using firestore
}
  
  export default { firebase, reduxFirebase }
