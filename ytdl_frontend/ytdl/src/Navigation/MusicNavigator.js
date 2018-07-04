import {createStackNavigator} from 'react-navigation'
import MusicHome from '../Music/index'
import Songs from '../Music/Songs/Songs'

const MusicNav = createStackNavigator({
    Home: {screen: MusicHome},
    Songs: {screen: Songs}
}, 
{initialRouteName: 'Home'},
{
    navigationOptions: {
    header: null
    }
});

export default MusicNav;