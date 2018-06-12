import { combineReducers } from 'redux'
import TaskReducer from './TaskReducer'
import EmployeeReducer from './EmployeeReducer' 
import WeatherDataReducer from './WeatherDataReducer'

const Reducers = combineReducers({
  employReducer: EmployeeReducer,
  tasksReducer: TaskReducer,
  weatherReducer: WeatherDataReducer
})

export default Reducers


