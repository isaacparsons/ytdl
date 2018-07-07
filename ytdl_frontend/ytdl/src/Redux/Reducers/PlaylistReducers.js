import * as constants from '../Constants/PlaylistConstants'
import {updatePlaylistSongs} from '../HelperFunctions'

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
                currentPlaylist: action.title
            }
        case constants.SELECT_PLAYLIST:
            return {
                ...state,
                currentPlaylist: action.title
            }
        case constants.ADD_SONG_TO_PLAYLIST:
            return Object.assign({}, state, updatePlaylistSongs(state, action.index))
        default:
            return state
    }
}