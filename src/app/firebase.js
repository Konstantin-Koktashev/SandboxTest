import { createFirestoreInstance } from "redux-firestore";
export const firebase = {
  apiKey: "AIzaSyBCaTryWgOyhbmzcQxYwRohU_XpEKIr4dU",
  authDomain: "trello-43c92.firebaseapp.com",
  databaseURL: "https://trello-43c92.firebaseio.com",
  projectId: "trello-43c92",
  storageBucket: "trello-43c92.appspot.com",
  messagingSenderId: "536736075730",
  appId: "1:536736075730:web:329fd515e7b88b446e820b"
};

export const config = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableLogging: false,
  enableClaims: true 
}

export const reduxFirebase = {
  firebase,
  config,
  createFirestoreInstance // <- needed if using firestore
}

export default { firebase, reduxFirebase }
