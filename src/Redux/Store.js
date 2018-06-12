import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducer/Reducers';
import {createLogger} from 'redux-logger'

const middleware = applyMiddleware(createLogger())

const store = createStore(Reducers,middleware) // Normally it is an object {}

export default store