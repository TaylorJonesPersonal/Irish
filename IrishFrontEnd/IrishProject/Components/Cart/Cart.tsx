import React from 'react';
import { View, StyleSheet, StatusBar, Image, Text } from 'react-native';
import { Logo } from '../Dashboard/Logo';
import { CartAnim } from './CartAnim';
import { useState } from 'react';
import { applyNextFetchPolicy } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { StripeCheckout } from './StripeCheckout';

export const cart = (props:any) => {
    const navigation = props.navigation;
    const appState = useSelector<any,any>((state) => state);




    return(
    <View style={styles.container}>
        <Logo />
        <View style={styles.basketImageArea}>
            <View style={styles.icons}>
            <CartAnim />
            <Image style={{height: 75, width: 75, marginRight: 100}} source = {require('../../assets/icons/basket.png')} />
            </View>
        </View>
        <View style={{marginTop: 25}}>
            <Text style={styles.checkoutTitleText}>Are ye ready to checkout, {appState.user.gender}?</Text>
            <Text />
            <Text style={styles.generalTextBold}>Total items: </Text><Text style={styles.generalText}> {appState.user.cart.numberOfItems}</Text>
            <Text />
            <Text style={styles.generalTextBold}>From: </Text><Text style={styles.generalTextItalic}>{appState.menu.restaurantName}</Text>
            <Text />
            <Text style={styles.generalTextBold}>Total price: </Text><Text style={styles.generalText}>${appState.user.cart.totalPrice}{'\n'}</Text>
            <StripeCheckout navigation={navigation} />
        </View>


    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "green"
    },


    basketImageArea : {
        marginTop: 5,
        flex: .25,
    },

    checkoutTitleText : {
        fontFamily: 'FiraSans-Black',
        color: '#ffcc33',
        fontSize: 24,
        textAlign: 'center',
    },

    generalText: {
        fontFamily: 'FiraSans-Black',
        color: '#ffcc33',
        fontSize: 22,
        textAlign: 'center',
    },

    generalTextItalic: {
        fontFamily: 'FiraSans-Black_italic',
        color: '#ffcc33',
        fontSize: 22,
        textAlign: 'center'
    },

    generalTextBold: {
        fontFamily: 'FiraSans-Medium',
        color: '#ffcc33',
        fontSize: 22,
        textAlign: 'center'
    },

    icons: {
      flexDirection: 'row'  
    }
})