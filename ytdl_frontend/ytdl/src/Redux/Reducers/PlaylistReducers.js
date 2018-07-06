import * as constants from '../Constants/PlaylistConstants'

initialState = {
    playlist: [],
    isLoading: false
}

export default function PlaylistReducer(state = initialState, action){
    switch(action.type){

        // playlist is an array containing of playlist objects,
        // playlist objects contain the title of the playlist and the songs in the playlist

        case constants.ADD_PLAYLIST:
            return {
                ...state,
                playlist: [...state.playlist, {title: action.title, songs:[]}],

            }
        default:
            return state
    }
}