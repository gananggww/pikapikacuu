const defaultState = {
  allpika: [],
}

const pikaReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'GET_PIKA':
      return {...state, allpika: action.payload}
    default:
    return state
  }
}

export default pikaReducer
