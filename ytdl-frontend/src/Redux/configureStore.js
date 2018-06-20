import {createStore} from 'redux'
import rootReducer from './Reducers/index'


export default function configureStore() {
    let store = createStore(rootReducer)
    return store;
}