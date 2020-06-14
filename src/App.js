import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch } from 'react-redux';
import { insertOne, boardAdded } from './features/boards/boardSlice'
import { Route, Switch } from 'react-router-dom';
import SignUp from './features/auth/Signup';
import SignIn from './features/auth/signIn';
import Home from './features/auth/Home';
function App() {



  return (
    <div className="App">
      <Switch >
        <Route exact path='/login' component={SignIn}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
