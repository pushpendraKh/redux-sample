import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducer/Reducers';
import {createLogger} from 'redux-logger' // for pretty logging
import thunk from 'redux-thunk' // for async dispatch actions

const middleware = applyMiddleware(createLogger(), thunk)

const store = createStore(Reducers, middleware) // Normally it is an object {}

export default store