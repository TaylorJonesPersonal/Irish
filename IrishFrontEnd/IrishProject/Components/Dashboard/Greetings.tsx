import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

export const Greetings = () => {
  const appState = useSelector<any, any>((state) => state);
    return(
    <View style= {styles.greetingsarea}>
  
      <Text style ={styles.text}>
        Hello, {appState.user.firstName}!
      </Text>
    </View>
    )
  };

  const styles = StyleSheet.create({
  greetingsarea:{
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flex: .12,
    alignSelf: 'stretch',
    backgroundColor: "green", 
    alignItems: 'center'
  },

  text: {
    fontFamily: 'FiraSans-Black',
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 3},
    textShadowRadius: 10,
    color: '#ffcc33',
    fontSize: 32,
    justifyContent: 'center',
  },
})