
const initialData = {
    visibility: 0,
    fetching: false,
    fetched: false
}

const WeatherDataReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {...state, fetching: true}
        case 'FETCH_ERROR':
            return {...state, fetching: false}
        case 'RESPONSE_RECEIVED':
            return {...state, fetched: true, visibility: action.payload}
        case 'default':
            return state           
    }
}

export default WeatherDataReducer