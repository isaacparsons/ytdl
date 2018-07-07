import React, {Component} from 'react'
import {View, FlatList} from 'react-native'
import { connect } from 'react-redux'
import AddSongItem from '../Playlists/AddSongItem'

class AddSongs extends Component {
    constructor(props) {
        super(props);
      }

    addSongItem = ({ item, index }) => (
        <AddSongItem songTitle = {item} songIndex = {index}/>)
    
    render() {
        return (
            <View>
                <FlatList 
                    data = {this.props.state.songs}
                    renderItem = {this.addSongItem}/>
            </View>);
    }
}

function mapStateToProps(state){
    return{
        state: state.SongReducers
    }
}
function mapDispatchToProps(dispatch){
    return({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSongs);