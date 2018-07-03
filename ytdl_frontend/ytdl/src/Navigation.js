import { createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import Music from '../App'
import Downloads from './Download/index'


export default createBottomTabNavigator(
    {
    Home: Music,
    Downloads: Downloads
    },
    {
        navigationOptions: ({ navigation }) => ({
           tabBarIcon: () => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = 'construct';
            //} else if (routeName === 'Settings') {
            //   iconName = `ios-options${focused ? '' : '-outline'}`;
            }
    
            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name='library_music' />;
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