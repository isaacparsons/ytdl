import React, {Component} from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class PlaylistItem extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style = {styles.card}>
                <Image source = {require('../../resources/playlist.png')}/>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

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
