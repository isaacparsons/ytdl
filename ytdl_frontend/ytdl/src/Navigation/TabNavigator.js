import { createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import MusicNav from '../Navigation/MusicNavigator'
import Downloads from '../Download/index'

export default createBottomTabNavigator(
    {
    Home: {screen: MusicNav},
    Downloads: {screen: Downloads}
    },
    {initialRouteName: 'Home'},
    {
      navigationOptions: ({ navigation }) => ({
          tabBarIcon: () => {
          const { routeName } = navigation.state;


          
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
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