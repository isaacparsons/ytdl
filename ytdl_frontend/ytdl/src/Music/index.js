import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'


export default class Music extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity style = {{marginBottom: 20, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', borderRadius: 50, width: 40, height: 40}}>
                    <Image source={require('../resources/add_white.png')}/>
                </TouchableOpacity>

                <View>
                <TouchableOpacity style = {styles.image_container}>
                    <Image source={require('../resources/playlist_white.png')}/>
                    <Text style = {styles.image_title}>Playlists</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.image_container}>
                    <Image source={require('../resources/song_white.png')}/>
                    <Text style = {styles.image_title}>Songs</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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
    }
  });
