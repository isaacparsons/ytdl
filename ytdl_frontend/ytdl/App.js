import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Music from './src/Music/index'
import Songs from './src/Music/Songs/Songs'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Songs/>
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
