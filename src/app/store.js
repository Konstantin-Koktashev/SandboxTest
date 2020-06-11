import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/boards/boardSlice'
import userReducer from '../features/user/userSlice'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {
  firebaseReducer, getFirebase
} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import {logger} from 'redux-logger'

const customizedMiddleware = getDefaultMiddleware({
  thunk: {
    extraArgument: getFirebase
  }
})



export default configureStore({
  reducer: {
    counter: counterReducer,
    user:userReducer,
    boards:boardReducer,
    firebase: firebaseReducer,
    fireStore: firestoreReducer
  },
  middleware:[...customizedMiddleware,logger]
});
