import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import store from './Redux/Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


store.subscribe(() => {
  console.log("Store changed", store.getState())
})

// FIre Action
store.dispatch({type: 'CHANGE_AGE', payload: 32})
store.dispatch({type: 'CHANGE_NAME', payload: 'Raju'})
store.dispatch({type: 'CHANGE_EMP', payload: {age: 23, name: 'Ram'}})
store.dispatch({type: 'ADD_TASK', payload: 'CRS'})
store.dispatch({type: 'ADD_TASK', payload: 'CeS'})
store.dispatch({type: 'DELETE_TASK', payload: 'CRS'})

export default App;
