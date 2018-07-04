import * as constants from '../Constants/SongConstants'

const initialState = {
}

export default function SongReducer(state = initialState, action){
    switch(action.type){
        case constants.RETRIEVING_SONG_LIST:
            return {
                ...state,
                loadingSongs: true, 
            }
        
        case constants.RETREIEVED_SONG_LIST_SUCCESS:
            return {
                ...state,
                loadingSongs: false,
                songs: action.songs
            }

        default:
            return state
        }
    }