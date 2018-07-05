import { createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import MusicNav from '../Navigation/MusicNavigator'
import Downloads from '../Download/index'

export default createBottomTabNavigator(
    {
    Home: {screen: MusicNav},
    Downloads: {screen: Downloads}
    },
    {initialRouteName: 'Home',
     tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        showIcon: true,
      },
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let imgName;
        if(routeName === 'Home'){
          imgName = require('../resources/song.png');
        } else if(routeName == 'Downloads'){
          imgName = require('../resources/download_black.png')
        }

        return <Image style = {{height: 20, width: 20}} source = {imgName}/>;
      },
    }),
    },

);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image_container: {
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      width: 100,
      height: 100,
      backgroundColor: 'blue'
    },
    image_title:{
      color: 'white'
    }
  });