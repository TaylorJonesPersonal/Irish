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
import {cart}  from '../Cart/Cart';
import {CartTabBar} from '../Cart/CartTabBar';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export const CartStack = () => {
    return(
    <Stack.Navigator initialRouteName='CartTabBar' screenOptions={{headerShown: false}}>
      <Stack.Screen options={{headerShown: false}} name="CartTabBar" component={CartTabBar} />
      <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
    )
}