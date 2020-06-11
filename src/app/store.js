import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/boards/boardSlice'
import userReducer from '../features/user/userSlice'
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import { actionTypes as rfActionTypes } from "redux-firestore";

import {
  firebaseReducer
} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import {logger} from 'redux-logger'

const customizedMiddleware = getDefaultMiddleware({
  thunk: {
    extraArgument: getFirebase
  },
  serializableCheck: {
      ignoredActions: [
        ...Object.keys(rrfActionTypes).map(
          (key) => `@@reactReduxFirebase/${key}`
        ),
        ...Object.keys(rfActionTypes).map((key) => `@@reduxFirestore/${key}`),
      ],
      ignoredPaths: ["firebase", "firestore"],
    },
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