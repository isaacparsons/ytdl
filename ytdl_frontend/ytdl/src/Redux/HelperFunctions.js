

export function updatePlaylistSongs(state, newSongIndex){
    console.log(state)
    var newPlaylists = [];
    for(var i = 0; i<state.playlist.length;i++){
        var playlist = state.playlist[i];
        if(playlist.title == state.currentPlaylist){
            var newSongs = [];
            newSongs.push(...playlist.songs)
            newSongs.push(newSongIndex)
            newPlaylists.push({title: playlist.title, songs: newSongs})
        } else {
            newPlaylists.push(playlist)
        }
    }
    var newState = {
        isLoading: state.isLoading,
        currentPlaylist: state.currentPlaylist,
        playlist: newPlaylists
        };
    return newState;
}