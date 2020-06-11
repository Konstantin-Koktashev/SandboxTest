import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch } from 'react-redux';
import { insertOne, boardAdded } from './features/boards/boardSlice'
import { Route, Switch } from 'react-router-dom';
import SignUp from './features/user/Signup';
import SignIn from './features/user/signIn';
import Home from './features/user/Home';
function App() {

  // const todo={number:3,id:Math.random()}
  // const dispatch=useDispatch()
  // const test=async()=>{

  // try {
  //   await dispatch(insertOne(todo))
  //   dispatch(boardAdded(todo))
  // } catch (error) {
  //   console.log(error)
  // }
  // }
  // test()

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
