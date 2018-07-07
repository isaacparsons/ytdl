import * as constants from '../Constants/PlaylistConstants'

export function addPlaylist(playlistTitle){
    return {
        type: constants.ADD_PLAYLIST,
        title: playlistTitle
    }
}

export function selectPlaylist(playlistTitle){
    return {
        type: constants.SELECT_PLAYLIST,
        title: playlistTitle
    }
}

export function addSongToPlaylist(index){
    return {
        type: constants.ADD_SONG_TO_PLAYLIST,
        index: index
    }
}