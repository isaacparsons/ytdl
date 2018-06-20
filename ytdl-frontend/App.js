import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

//IMPORT ACTION(S)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title = "button" onPress = {dlImage()}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps (state) {
  return {
    //...: state.//....
  }
}

function mapDispatchToProps (dispatch) {
  return {
    //DO SOMETHING: () => dispatch(reducerfunction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
