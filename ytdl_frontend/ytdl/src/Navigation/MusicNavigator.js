import {createStackNavigator} from 'react-navigation'
import MusicHome from '../Music/index'
import Songs from '../Music/Songs/Songs'
import PlaylistList from '../Music/Playlists/PlaylistList'
import Playlist from '../Music/Playlists/Playlist'
import PlaylistItem from '../Music/Playlists/PlaylistItem'
import AddSongs from '../Music/Playlists/AddSongs'


const MusicNav = createStackNavigator({
    Home: {screen: MusicHome},
    Songs: {screen: Songs},
    PlaylistList: {screen: PlaylistList},
    Playlist: {screen: Playlist},
    PlaylistItem: {screen: PlaylistItem},
    AddSongs:  {screen: AddSongs}
}, 
{initialRouteName: 'Home'});

export default MusicNav;