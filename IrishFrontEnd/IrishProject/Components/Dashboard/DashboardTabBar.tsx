import {NavigationContainer} from '@react-navigation/native';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Login } from '../Login/Login';
import { Dashboard } from './Dashboard';
import { Menu } from '../Menus/Menu';
import { DashboardStack } from './DashboardStack';
import { MenuStack } from '../Menus/MenuStack';
import { useSelector } from 'react-redux';
import { cart } from '../Cart/Cart';

const Tab = createBottomTabNavigator();

export const DashboardTabBar = ({navigation, route}:any) => {
    const basketBadgeNumber = useSelector<any, any>((state) => state.checkoutBasketBadge.checkoutBasketBadge);
    return(
        <Tab.Navigator initialRouteName='Dashboard' screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute', backgroundColor: 'white', borderRadius: 5, opacity: .95 }, tabBarShowLabel: false }}>
           <Tab.Screen name="Dashboard" component={Dashboard}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => {
                                if(focused == false){
                                    return(
                                <View>
                                    <Image
                                        style={{ height: 25, width: 25, tintColor: "black" }}
                                        source={require('../../assets/icons/cottage.png')} />
                                    <Text style={{ color: "black", fontSize: 12 }} >Home</Text>
                                </View>
                                )} else{
                                    return(
                                        <View>
                                    <Image
                                        style={{ height: 25, width: 25, tintColor: "#328525" }}
                                        source={require('../../assets/icons/cottage.png')} />
                                    <Text style={{ color: "black", fontSize: 12 }} >Home</Text>
                                </View>
                                    )
                                }
                                
                        }
                        }} />
                        <Tab.Screen name="Basket" component={cart}
                        options={{
                            tabBarBadge: basketBadgeNumber>0 ? basketBadgeNumber : null,
                            tabBarIcon: ({focused}) => {
                                if(focused == false){
                                    return(
                                <View>
                                    <Image
                                        style={{ height: 25, width: 25, tintColor: "black" }}
                                        source={require('../../assets/icons/basket.png')} />
                                    <Text style={{ color: "black", fontSize: 12 }} >Basket</Text>
                                </View>
                                    )} else {
                                        return(
                                            <View>
                                    <Image
                                        style={{ height: 25, width: 25, tintColor: "#328525" }}
                                        source={require('../../assets/icons/basket.png')} />
                                    <Text style={{ color: "black", fontSize: 12 }} >Basket</Text>
                                </View>
                                        )
                                    }
                            }
                        }} />
                    <Tab.Screen name="Settings" component={Dashboard}
                        options={{
                            tabBarIcon: ({focused}) => {
                                if(focused == false){
                                    return(
                                <View>
                                    <Image
                                        style={{ height: 25, width: 25, tintColor: "black" }}
                                        source={require('../../assets/icons/watermill.png')} />
                                    <Text style={{ color: "black", fontSize: 12 }} >Settings</Text>
                                </View>
                                    )} else{
                                        return(
                                            <View>
                                    <Image
                                        style={{ height: 25, width: 25, tintColor: "#328525" }}
                                        source={require('../../assets/icons/watermill.png')} />
                                    <Text style={{ color: "black", fontSize: 12 }} >Settings</Text>
                                </View>
                                        )
                                    }
                            }
                        }} />
        </Tab.Navigator>
    )
}