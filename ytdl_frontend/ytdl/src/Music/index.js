import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'
import {addPlaylist} from '../Redux/Actions/PlaylistActions'



class Music extends Component {
    state = {
        textInputVisibility: false,
        playlistTitle: ''
    }

    ToggleTextInput = () => {
        this.setState({textInputVisibility: true});
    }

    renderTextInput = () => {
        if(this.state.textInputVisibility){
            return(
                <View style ={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput onChangeText={(title) => this.setState({playlistTitle: title})} style = {{minWidth: 100, backgroundColor: 'white'}}/>
                </View>);
        } else {return null;}
    }

    render(){
        const navigation = this.props.navigation;

        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress={this.ToggleTextInput} style = {styles.add}>
                    <View style = {styles.add}>
                        <Image source={require('../resources/add_white.png')}/>
                        <Text style = {styles.addTitle}>Add Playlist</Text>
                        {this.renderTextInput()}
                    </View>
                </TouchableOpacity>

                <Button title = {"button"} onPress = {() => {this.props.addPlaylist(this.state.playlistTitle); navigation.navigate('Playlist')}}/>
                <TouchableOpacity onPress={() => this.setModalVisibility} style = {styles.add}>
                    <View style = {styles.add}>
                        <Image source={require('../resources/add_white.png')}/>
                        <Text style = {styles.addTitle}>Add Song</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('PlaylistList')} style = {styles.image_container}>
                    <Image source={require('../resources/playlist_white.png')}/>
                    <Text style = {styles.image_title}>Playlists</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Songs')} style = {styles.image_container}>
                    <Image source={require('../resources/song_white.png')}/>
                    <Text style = {styles.image_title}>Songs</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


function mapStateToProps (state) {
    return {
      stuff: state.SongReducers
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return({
      addPlaylist: (playlist_title) => {dispatch(addPlaylist(playlist_title))}
    })
  }
  



export default connect(mapStateToProps, mapDispatchToProps)(Music)

const styles = StyleSheet.create({
    container: {
      marginTop: 70,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image_container: {
      margin: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      width: 100,
      height: 100,
      backgroundColor: 'blue'
    },
    image_title:{
      color: 'white'
    },
    add: {
        margin: 5,
        padding: 4, 
        flexDirection: 'row',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    addTitle: {
        color: 'white',
        padding: 2
    }
  });
