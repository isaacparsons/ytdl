import * as constants from '../Constants/SongConstants'
import {listSongs, musicDir} from '../../Filesystem'

export function retrieveSongs() {
    return async function(dispatch){
        await musicDir();
        listSongs().then((songs) => {
            dispatch(retrievedSongsSuccessful(songs))
        })
    }
}

export function retrievingSongs () {
    return {
        type: constants.RETRIEVING_SONG_LIST
    }
}

export function retrievedSongsSuccessful(song_list) {
    return {
        type: constants.RETREIEVED_SONG_LIST_SUCCESS,
        songs: song_list
    }
}