import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducer/Reducers';
import axios from 'axios'
import {createLogger} from 'redux-logger' // for pretty logging
import thunk from 'redux-thunk' // for async dispatch actions
//import WeatherDataReducer from './Reducer/WeatherDataReducer'
const taskErrorMiddleWare = (store) => (next) => (action) => {
    try {
      next(action)
    } catch(e) {
      console.log('Ohh!', e)
    }
  }

const middleware = applyMiddleware(createLogger(), thunk, taskErrorMiddleWare)


const store = createStore(Reducers, middleware) // Normally it is an object {}

export default store