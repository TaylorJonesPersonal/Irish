import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from '../Login/Login';
import { DashboardTabBar } from '../Dashboard/DashboardTabBar';
import { Menu } from '../Menus/Menu';
import { DashboardStack } from '../Dashboard/DashboardStack';
import { LogBox } from 'react-native';
import { RestaurantMap } from './RestaurantMap';

const Stack = createStackNavigator();

LogBox.ignoreAllLogs();

export const MenuStack = () => {
    return(
    <Stack.Navigator initialRouteName='Menu' screenOptions={{headerShown: false}}>
      <Stack.Screen options={{headerShown: true, headerStyle:{backgroundColor: "#328525", borderStyle: 'solid', borderBottomColor: 'black', borderBottomWidth: 1}}} name="Menu" component={Menu} />
      <Stack.Screen options={{headerShown: false}} name="DashboardStack" component={DashboardStack} /> 
      <Stack.Screen options={{headerShown: true, headerTitle:"Map", headerStyle:{backgroundColor: "#328525"}}} name="RestaurantMap" component={RestaurantMap} />
    </Stack.Navigator>
    )
}