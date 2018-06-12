import React, { Component } from 'react';
import {createStore} from 'redux';
import store from './Redux/Store';

class App extends Component {
 render() {
   return(
     <div style = { {flex: 1, textAlign: 'center', margin: '200'}}>  
       'Redux Example'
      </div>
   )
 }
}

// Subscribe store
store.subscribe(() => {
  console.log("Store changed", store.getState())
})

// Fire Action
store.dispatch({type: 'CHANGE_AGE', payload: 32})
store.dispatch({type: 'CHANGE_NAME', payload: 'Raju'})
store.dispatch({type: 'CHANGE_EMP', payload: {age: 23, name: 'Ram'}})
store.dispatch({type: 'ADD_TASK', payload: 'CRS'})
store.dispatch({type: 'ADD_TASK', payload: 'CeS'})
store.dispatch({type: 'DELETE_TASK', payload: 'CRS'})

export default App;
