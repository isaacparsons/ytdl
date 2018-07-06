import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {selectPlaylist} from '../../Redux/Actions/PlaylistActions'

class PlaylistItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <TouchableHighlight onPress = {() => {selectPlaylist(this.props.title); this.props.navigation.navigate('Playlist')}}>
                    <View style = {styles.card}>
                        <Image source = {require('../../resources/playlist.png')}/>
                        <Text>{this.props.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return({
       selectPlaylist: (playlistTitle) => {dispatch(selectPlaylist(playlistTitle))}
    })
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem)

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImg: {
        width: 40, 
        height: 40
    }
})
