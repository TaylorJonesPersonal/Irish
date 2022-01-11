import React from 'react';
import { useSelector } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from '../Login/Login';
import { DashboardTabBar } from '../Dashboard/DashboardTabBar';
import { Menu } from '../Menus/Menu';
import { MenuStack } from '../Menus/MenuStack';
import { LogBox } from 'react-native';
import {CartStack} from '../Cart/CartStack';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export const DashboardStack = () => {
    return(
    <Stack.Navigator initialRouteName='DashboardTabBar' screenOptions={{headerShown: false}}>
      <Stack.Screen options={{headerShown: false}} name="DashboardTabBar" component={DashboardTabBar} />
      <Stack.Screen options={{headerShown: false}} name="MenuStack" component={MenuStack} />
      <Stack.Screen options={{headerShown: false}} name="CartStack" component={CartStack} />
    </Stack.Navigator>
    )
}