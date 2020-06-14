import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/boards/boardSlice'
import authReducer from '../features/auth/authSlice'
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import {
  firebaseReducer
} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import {logger} from 'redux-logger'

const customizedMiddleware = getDefaultMiddleware({
  thunk: {
    extraArgument: getFirebase
  },
  serializableCheck: false,
  immutableCheck: {
    ignoredPaths: ["user"]
  }
})



export default configureStore({
  reducer: {
    counter: counterReducer,
    auth:authReducer,
    boards:boardReducer,
    firebase: firebaseReducer,
    fireStore: firestoreReducer
  },
  middleware:[...customizedMiddleware,logger]
});