import React from 'react';
import { View, StyleSheet, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { BodyArea } from './BodyArea';
import { FeaturedItems } from './FeaturedItems';
import { Greetings } from './Greetings';
import { Logo } from './Logo';
import { Bottom } from './Bottom';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../Login/Login';
import { DashboardTabBar } from './DashboardTabBar';

const Tab = createBottomTabNavigator();

export const Dashboard = ({ navigation, route }: any) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Logo />
            <Greetings/>
            <BodyArea />
            <FeaturedItems navigation = {navigation}/>
            <Bottom />
            </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    }

})