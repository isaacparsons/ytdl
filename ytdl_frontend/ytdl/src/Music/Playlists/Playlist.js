import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

class Playlist extends Component {
    render(){
        return(<View>
                <Text></Text>
                {/* <FlatList
                    data = {}
                    renderItem={}/> */}
                </View>);
    }
}

function mapStateToProps (state) {
    return {
    //   stuff: state.SongReducers
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return({
    //   getSongs: () => {dispatch(retrieveSongs())}
    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);