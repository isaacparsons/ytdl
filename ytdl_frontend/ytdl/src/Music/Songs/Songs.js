import React, {Component} from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import SongItem from './SongItem'


class Songs extends Component {
  constructor(props) {
    super(props);
  }

  songItem = ({ item }) => (
    <SongItem songTitle = {item}/>
  )

  render() {
    return (
      <FlatList
          data = {this.props.stuff.songs}
          renderItem={this.songItem}/>
    )}
  }
function mapStateToProps (state) {
  return {
    stuff: state.SongReducers
  }
}

function mapDispatchToProps(dispatch) {
  return({
    // getSongs: () => {dispatch(retrieveSongs())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
