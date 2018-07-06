import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import PlaylistActions from '../../Redux/Actions/PlaylistActions'

class PlaylistItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const navigation = this.props.navigation;
        return(
            <View style = {styles.card}>
                <TouchableHighlight onPress = {() => {selectPlaylist(this.props.title); navigation.navigate('Playlist')}}>
                    <Image source = {require('../../resources/playlist.png')}/>
                    <Text>{this.props.title}</Text>
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
       selectPlaylist: (playlistTitle) => {dispatch(PlaylistActions.selectPlaylist(playlistTitle))}
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
