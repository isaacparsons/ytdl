import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'
import {Provider} from 'react-redux'

import configureStore from './src/Redux/configureStore'
const store = configureStore();

const rnredux = () => {
    return(
        <Provider store = {store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent('ytdl', () => rnredux);
