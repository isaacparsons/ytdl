import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Music from './src/Music/index'
import Songs from './src/Music/Songs/Songs'
import TabNavigator from './src/Navigation/TabNavigator'

export default class App extends Component {
  render() {
    return (
      <View style = {{flex: 1}}>
        <TabNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
