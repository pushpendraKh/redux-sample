import React, { Component } from 'react';
import {createStore} from 'redux';
import store from './Redux/Store';

class App extends Component {
 render() {
   return(
     <div style = {{ textAlign: 'center', color: 'red'}}>  
       Redux Example by
       <div style = { {color: 'purple'}}> 
          Pushpendra Khandelwal
          <div style = {{ fontSize: '10px', color: 'black'}}>
            P.S. This example contains pure-redux with middleware
            </div>
       </div>
      </div>
   )
 }
}

// Subscribe store
store.subscribe(() => {
  console.log("Store changed", store.getState())
})

// Fire Action as Plain Objects
store.dispatch({type: 'CHANGE_AGE', payload: 32})
store.dispatch({type: 'CHANGE_NAME', payload: 'Raju'})
store.dispatch({type: 'CHANGE_EMP', payload: {age: 23, name: 'Ram'}})
store.dispatch({type: 'ADD_TASK', payload: 'CRS'})
store.dispatch({type: 'ADD_TASK', payload: 'CeS'})
store.dispatch({type: 'DELETE_TASK', payload: 'CRS'})


// If you do like this, this is not allowed
// Error: Actions must be plain objects. Use custom middleware for async actions.

/*store.dispatch((dispatch) => {
  store.dispatch({type: 'ADD_TASK', payload: 'Turvo'})
  store.dispatch({type: 'ADD_TASK', payload: 'Acko'})
  store.dispatch({type: 'ADD_TASK', payload: 'HDFC'})
}) */

// to solve this we can use thunk middle ware which is provided by 'react-thunk'
// Now after installing 'redux-thunk', it is possible 

store.dispatch((dispatch) => {
  store.dispatch({type: 'ADD_TASK', payload: 'Turvo'})
  store.dispatch({type: 'ADD_TASK', payload: 'Acko'})
  store.dispatch({type: 'ADD_TASK', payload: 'HDFC'})
})


export default App;
