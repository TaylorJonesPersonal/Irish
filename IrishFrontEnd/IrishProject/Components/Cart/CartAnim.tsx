import { transform } from '@babel/core';
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View, Image } from 'react-native';

export const CartAnim = (props: any) => {
    const startValue = new Animated.Value(-50);
    const fadeAnim = new Animated.Value(100);
    const endValue = 40;

    React.useEffect(() => {
        Animated.loop(
            Animated.stagger(300,[
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 100,
                        useNativeDriver: true
                    }
                ),
                Animated.spring(
                    startValue,
                    {
                        toValue: endValue,
                        damping: 9,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    fadeAnim,
                    {
                        toValue: 0,
                        duration: 3000,
                        useNativeDriver: true
                    }
                ),
            ])
        )
            .start();
    }, [startValue, endValue])


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Animated.Image source={require('../../assets/icons/smoke.png')}
                style={[{ transform: [{ translateX: startValue }], opacity: fadeAnim, height: 39.6, width: 100 , marginTop: 15}]}
            />
        </View>
    )
}

// You can then use your `FadeInView` in place of a `View` in your components: