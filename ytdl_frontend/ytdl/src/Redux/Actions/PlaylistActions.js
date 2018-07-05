import * as constants from '../Constants/PlaylistConstants'

export function addPlaylist(playlistTitle){
    return {
        type: constants.ADD_PLAYLIST,
        title: playlistTitle
    }
}