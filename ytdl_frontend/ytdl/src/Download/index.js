import React, { Component } from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'


class Download extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => this.setModalVisibility} style = {styles.add}>
                    <View style = {styles.add}>
                        <Image source={require('../resources/add_white.png')}/>
                        <Text style = {styles.addTitle}>Download Song</Text>
                    </View>
                </TouchableOpacity>
            
            </View>
        );
    }
}

export default Download;


const styles = StyleSheet.create({
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
})