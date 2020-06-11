import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable
import { firebase as fbConfig, reduxFirebase as rfConfig } from './app/firebase'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}
firebase.firestore() //

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
