const initialState = {
    employee: {
        name: 'Pushpendra',
        age: 20
    },
    maritalStatus: 'Not Married',
}

export const EmployeeReducer = (state = initialState, action) => {
    const newstate = { ...state}
    switch (action.type) {
        case 'CHANGE_AGE': {
            newstate.employee = {
                ...state.employee, age: action.payload
            }
            return {...newstate}
        }
         case 'CHANGE_NAME': {
            newstate.employee = {
                 ...newstate.employee, name: action.payload
             }
            return { ...newstate }
        }
        
        case 'CHANGE_EMP': {
           return {...newstate, employee: action.payload}
        }

        default: 
            return state
    }
} 

export default EmployeeReducer 


// If you export a function (do not put default) 
// then while importing you may or may not put curley braces 
// e.g import {ABC} from './ABC'
// But if you dont export a function/constant you cant write that 
// in curley braces. For that you need to write
// e.g import ABC from './ABC'


// IF you do not 'export default ABC' then it will throw error
// '"export 'default' (imported as 'ABC') was not found in './ABC''
