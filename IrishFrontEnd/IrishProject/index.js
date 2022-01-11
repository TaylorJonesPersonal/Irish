/**
 * @format
 */

 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import { configureStore } from './Redux/store/store';
 import { Provider } from 'react-redux';
 import { View, Text } from 'react-native';
 
 
 const store = configureStore();
 
 const RNRedux = () => (
     <Provider store = {store}>
         <App />
         </Provider>
 )
 
 AppRegistry.registerComponent(appName, () => RNRedux);
 