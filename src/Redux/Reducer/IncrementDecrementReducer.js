const IncrementDecrementReducer =  function(state = 0, action) {
    switch (action.type) {
      case 'INC':
        return state + 1
      case 'DEC': 
        return state - action.payload
      default: 
        return state
    }
  }