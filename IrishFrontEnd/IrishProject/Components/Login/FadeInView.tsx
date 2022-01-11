import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeInView = (props:any) => {
  const fadeAnim = useRef(new Animated.Value(.10)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: .80,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default (props:any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 200, backgroundColor: 'green', borderRadius: 5}}>
        <Text style={{fontSize: 18, textAlign: 'center', margin: 10, color: "white"}}>{props.inputText}</Text>
      </FadeInView>
    </View>
  )
}