import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Bottom = () => {
    return(
        <View style = {styles.bottom} />
    )
} 

const styles = StyleSheet.create({
    bottom: {
        flex: .2,
        backgroundColor: "green"
    }
})