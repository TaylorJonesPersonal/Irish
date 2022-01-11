import * as React from 'react';
import { useState } from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

export const StripeCheckout = (props:any) => {
    const navigation = props.navigation;
    const { confirmPayment } = useStripe();

    const [ordered, setOrdered] = useState(false);

    if(ordered == false){
    return(
      <View style={styles.paymentArea}>
        <CardField
        postalCodeEnabled={true}
      placeholder={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#9F9F9F',
        textColor: 'white',

      }}
      style={{
        width: '95%',
        height: 50,
        marginTop: 30,
      }}
      onCardChange = {() => console.log("Card changed.")} />
      <TouchableOpacity onPress={() => [setOrdered(true)]}>
        <View style={styles.completeOrderBtn}><Text style={styles.completeOrderText}>Complete Order</Text></View>
      </TouchableOpacity>
</View>
    )
    } else{
      return(
      <View style={styles.paymentArea}>
        <Text style={styles.completeOrderText}>Completed!</Text>
      </View>
      )
    }
}

const styles = StyleSheet.create({
  completeOrderBtn:{
    borderRadius: 10, 
    borderStyle: 'solid', 
    borderColor: 'black', 
    borderWidth: 3,
    backgroundColor: '#9F9F9F',
    padding: 10,
    marginTop: 5,
  },

  completeOrderText:{
    fontSize: 24,
    textAlign: 'center',
    color: 'black'
  },
  paymentArea: {
    alignSelf: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: '#BFBFBF',
    width: '98%',
    height: 150,
  }
})