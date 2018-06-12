import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer'
import EmployeeReducer from './EmployeeReducer' 

const Reducers = combineReducers({
  employReducer: EmployeeReducer,
  tasksReducer: TaskReducer
})

export default Reducers


