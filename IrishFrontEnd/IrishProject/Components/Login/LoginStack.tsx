import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from './Login';
import { DashboardTabBar } from '../Dashboard/DashboardTabBar';
import { Menu } from '../Menus/Menu';
import { DashboardStack } from '../Dashboard/DashboardStack';

const Stack = createStackNavigator();

export const LoginStack = () => {
    return(
        <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="DashboardStack" component={DashboardStack} />
    </Stack.Navigator>
    </NavigationContainer>
    )
}