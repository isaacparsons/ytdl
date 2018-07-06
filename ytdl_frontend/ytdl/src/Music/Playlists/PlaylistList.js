import React, {Component} from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Button } from 'react-native'
import {connect} from 'react-redux'

import PlaylistItem from './PlaylistItem'


class Playlists extends Component {

    constructor(props) {
        super(props);
      }

      playlistItem = ({ item }) => (
        <PlaylistItem title = {item} navigation = {this.props.navigation}/>
      )

    render(){
        const nav = this.props.navigation;
        return(<View>
                    <Text>PLAYLISTS</Text>
                    <FlatList 
                        data = {this.props.state.playlist.map(playlistObj => playlistObj.title)}
                        renderItem = {this.playlistItem.bind(this)}/>
                </View>);
    }
}

function mapStateToProps (state) {
    return {
      state: state.PlaylistReducers
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return({
    })
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Playlists)