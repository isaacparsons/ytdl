import {combineReducers} from 'redux'

import SongReducers from './SongReducers'
import PlaylistReducers from './PlaylistReducers'

const rootReducer = combineReducers({
    SongReducers,
    PlaylistReducers
})

export default rootReducer