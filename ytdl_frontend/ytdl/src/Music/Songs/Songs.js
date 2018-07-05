import React, {Component} from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import SongItem from './SongItem'

import {retrieveSongs} from '../../Redux/Actions/SongActions'

class Songs extends Component {

  componentDidMount(){
    var songs = this.props.getSongs();
    console.log(this.props.stuff)
  }

  constructor(props) {
    super(props);
  }

  songItem = ({ item }) => (
    <SongItem songTitle = {item}/>
  )

  render() {
    if(this.props.stuff.loadingSongs == false){
      return (
        <FlatList
            data = {this.props.stuff.songs}
            renderItem={this.songItem}/>
      )} else {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
