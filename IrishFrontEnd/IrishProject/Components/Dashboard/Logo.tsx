import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const Logo = (props:any) => {
    return(
      <View style={styles.imagearea}>
      <Image style={styles.logoimage} source={require('../../images/clover.jpeg')} />
      </View>
    )
  }

  const styles = StyleSheet.create({
    imagearea: {
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      alignItems: 'center',
      alignSelf: 'stretch',
      backgroundColor: 'white',
      opacity: .99,
      padding: 5
    },

    logoimage: {
        height:70, 
        width: 70,
      },
    })