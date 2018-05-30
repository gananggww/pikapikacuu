import { createStore, applyMiddleware } from 'redux'
import charReducer from '../reducer/index_reducer.jsx'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const midty = applyMiddleware(logger, thunk)
const store = createStore(charReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ,midty)

export default store
