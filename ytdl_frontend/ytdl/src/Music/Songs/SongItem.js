import React, {Component} from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


export default class SongItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Image style = {styles.icon} source={require('../../resources/song.png')}/>
                <View style = {styles.infoView}>
                    <Text style = {styles.titleText}>{this.props.songTitle}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    icon:{
        height: 50,
        width: 50
    },
    titleText:{
        
    },
    infoView:{
        flexShrink: 1

    }
  });
  