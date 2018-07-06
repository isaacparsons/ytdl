import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'


class Playlist extends Component {
    render(){
        if(this.props.state.currentPlaylist)
        return(<View>
                <Text>{this.props.state.currentPlaylist}</Text>
                <Button title= {"Add Songs"} onPress = {()=> {}}/>
                {/* <FlatList
                    data = {}
                    renderItem={}/> */}
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
    //   getSongs: () => {dispatch(retrieveSongs())}
    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);