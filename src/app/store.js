import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/boards/boardSlice'
import userReducer from '../features/user/userSlice'
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import { actionTypes as rfActionTypes } from "redux-firestore";
import { creatNewUser } from '../features/user/userSlice'
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
    user:userReducer,
    boards:boardReducer,
    firebase: firebaseReducer,
    fireStore: firestoreReducer
  },
  middleware:[...customizedMiddleware,logger]
});