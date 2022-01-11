import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



export const BodyArea = () => {

    return(
      <View style={styles.bodyarea}>
      <View style= {styles.contentarea}>
        <Text style={styles.textsmaller}>
          Thank you for using the world's first and only all-Irish food delivery service.
        </Text>
      </View>
      </View>
    )
    };

    const styles = StyleSheet.create({
        bodyarea:{
            alignSelf: 'stretch',
            flex:.15,
            
          },
          contentarea: {
            padding: 1,
            backgroundColor: "green", 
          },
          textsmaller: {
            fontFamily: 'FiraSans-Medium',
            color: '#ffcc33',
            fontSize: 20,
            textAlign: 'center',
        
          }
        })