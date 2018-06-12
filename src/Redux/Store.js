import { createStore } from 'redux';
import Reducers from './Reducer/Reducers';

const store = createStore(Reducers) // Normally it is an object {}

export default store