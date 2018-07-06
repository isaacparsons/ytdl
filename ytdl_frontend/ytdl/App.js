import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Music from './src/Music/index'
import Songs from './src/Music/Songs/Songs'
import TabNavigator from './src/Navigation/TabNavigator'
import {retrieveSongs} from './src/Redux/Actions/SongActions'
import {connect} from 'react-redux'


class App extends Component {

  componentDidMount(){
    this.props.getSongs();
  }

  render() {
    if(this.props.stuff.loadingSongs == false){
      return (
        <View style = {{flex: 1}}>
          <TabNavigator/>
        </View>
      );} else {
        return (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>);
    }
  }
}

function mapStateToProps (state) {
  return {
    stuff: state.SongReducers
  }
}

function mapDispatchToProps(dispatch) {
  return({
    getSongs: () => {dispatch(retrieveSongs())}
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
