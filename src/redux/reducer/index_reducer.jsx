const defaultState = {
  allChar: [],
}

const charReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'GET_ALL_CHAR':
      return {...state, allChar: action.payload}
    default:
    return state
  }
}

export default charReducer
