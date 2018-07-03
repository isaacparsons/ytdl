import React, {Component} from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import {musicDir} from './Filesystem'

//import DownloadActions from './src/Redux/actions/DownloadActions'

class Songs extends Component {

  componentDidMount(){
    musicDir();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}
function mapStateToProps (state) {
  return {
    stuff: state
  }
}

function mapDispatchToProps(dispatch) {
  return({
    doThings: () => {dispatch(DownloadActions())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)
