import {applyMiddleware, createStore} from 'redux'
import rootReducer from './Reducers/index'

// Logger with default options
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))
    return store;
}