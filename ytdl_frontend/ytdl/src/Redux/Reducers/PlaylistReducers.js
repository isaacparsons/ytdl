import * as constants from '../Constants/PlaylistConstants'

initialState = {
    playlist: []
}

export default function PlaylistReducer(state = initialState, action){
    switch(action.type){
        case constants.ADD_PLAYLIST:
            return {
                ...state,
                playlist: [...state.playlist, action.title]

            }
        default:
            return state
    }
}