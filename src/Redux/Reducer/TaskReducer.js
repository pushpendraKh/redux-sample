import store from "../Store";

const initialTaskState = {
    task: []
}

const TaskReducer = (state = initialTaskState, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                 task: [...state.task, action.payload ]
            }
        case 'DELETE_TASK':
            const filteredTask = state.task.filter((task) => {
                return task !== action.payload
            })
            if (filteredTask.length === state.task.length) {
                throw new Error('Oops! Task not found.')
                break
            }
            return {
                task: filteredTask
            } 
        default:
            return state   
    }
}

export default TaskReducer