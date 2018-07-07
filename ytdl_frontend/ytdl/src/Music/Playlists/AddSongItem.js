import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import {connect} from 'react-redux'
import {addSongToPlaylist} from '../../Redux/Actions/PlaylistActions'


class AddSongItem extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        backgroundGreyed: false,
    }

    render() {
        return (
            <View style = {[styles.container, this.state.backgroundGreyed ? {backgroundColor: 'rgba(52, 52, 52, 0.8)'} : {backgroundColor: 'rgba(52, 52, 52, 0)'}]}>
                <Image style = {styles.icon} source={require('../../resources/song.png')}/>
                <View style = {styles.infoView}>
                    <Text style = {styles.titleText}>{this.props.songTitle}</Text>
                </View>
                <TouchableWithoutFeedback onPress = {() => {this.setState({backgroundGreyed: true}); this.props.addSongToPlaylist(this.props.songIndex)}}>
                    <Image style = {styles.icon} source = {require('../../resources/add_black.png')}/>
                </TouchableWithoutFeedback>
                
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state.SongReducers
    }
}

function mapDispatchToProps(dispatch){
    return({
        addSongToPlaylist: (index) => {dispatch(addSongToPlaylist(index))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongItem)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    icon:{
        height: 40,
        width: 40
    },
    titleText:{
        
    },
    infoView:{
        flexShrink: 1
    },
    greyedOut:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    notGreyedOut: {
        backgroundColor: 'rgba(52, 52, 52, 0)'
    }
  });
  