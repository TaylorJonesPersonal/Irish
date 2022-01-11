import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, StatusBar, Image, Text, FlatList, TouchableOpacity, LogBox, AppState, Dimensions } from 'react-native';
import * as RestoData from '../../restaurants.json';
import { Bottom } from '../Dashboard/Bottom';
import { useSelector } from 'react-redux';
import { checkoutBasketBadge } from '../../Redux/actions/menuActions';
import { useQuery, gql } from '@apollo/client';
import { IUser } from '../../Redux/types/types';
import { UPDATECART } from '../../Redux/actions/ActionTypes';
import {LOGIN} from '../../Redux/actions/ActionTypes';
import MapView, { Marker } from 'react-native-maps';

LogBox.ignoreAllLogs();
  
export const Menu = (props:any) => {

    

    //Redux store appState
    const appState = useSelector<any, any>((state) => state);

    // GraphQL query
  const RESTAURANT = gql`
  query {
      restaurants(count:6) {
          id
          name
          description
          imageURL
          menu{
              items{
                  name
                  price
              }
          }
      }
  }
  `;

const {data, loading, error} = useQuery(RESTAURANT);


    const navigation = props.navigation;
    const dispatch = useDispatch();
    const menuNumber = useSelector<any,any>((state) => state.menu.menuNumber);
    
        //local state variables
      const [additemone, setAdditemone] = useState(0);
      const [additemtwo, setAdditemtwo] = useState(0);
      const [totalitems, setTotalitems] = useState(0);
      const [items, setItems] = useState ([]);
      const [carttotalprice, setCarttotalprice] = useState(0);

        //useEffect to update combined total items and price
      useEffect(() => {
        let newTotal = additemone + additemtwo;
        setTotalitems(newTotal);
        if(loading || error){
            console.log("waiting for apollo");
        }else{
        setCarttotalprice((additemone * data.restaurants[menuNumber-1].menu.items[0].price) + (additemtwo * data.restaurants[menuNumber-1].menu.items[1].price));
        }
    }, [additemone, additemtwo])

      let handleAddOne = () => {
        setAdditemone(additemone + 1);
      }

      let handleAddTwo = () => {
          setAdditemtwo(additemtwo + 1);
      }

      let handleSubtractOne = () => {
          if(additemone > 0)
          setAdditemone(additemone - 1)
      }

      let handleSubtractTwo = () => {
          if(additemtwo > 0)
          setAdditemtwo(additemtwo - 1)
      }
          


      const postBasketBadge = () => {
          let updatedCartUser:IUser = {
              id: appState.user.id,
              firstName: appState.user.firstName,
              lastName: appState.user.lastName,
              email: appState.user.email,
              username: appState.user.username,
              password: appState.user.password,
              gender: appState.user.gender,
              favorites: [],
              cart: {
                  numberOfItems: totalitems,
                  totalPrice: carttotalprice,
              }
          }
          dispatch({
            type: UPDATECART,
            payload: updatedCartUser
        })
          dispatch(
            checkoutBasketBadge(totalitems)
          )
          
          
          navigation.navigate('CartStack');
          
          
      }


      if(loading) {
        return(
            <View><Text style={styles.text}>Loading...</Text></View>
          )
      } else{
    return(
        
        <View style={styles.container}>
            <Text style={styles.restoTitle}>{data.restaurants[menuNumber-1].name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RestaurantMap', {restaurantName:data.restaurants[menuNumber-1].name, restaurantDescription: data.restaurants[menuNumber-1].description})}><View style={styles.locationButton}><Text style={styles.buyButtonText}>Location</Text></View></TouchableOpacity>
            <Text />
            <Image style={{height: 200, width: 300, alignSelf:'center', borderRadius: 8}} source={{uri:data.restaurants[menuNumber-1].imageURL}} />
            <Text />
            <Text style={{fontSize: 20 ,borderColor: 'black', borderWidth: 1, borderRadius: 5, padding: 5, backgroundColor:'#328525', alignSelf: 'center'}}><Text style={styles.text}>{data.restaurants[menuNumber-1].menu.items[0].name}:</Text><Text style={styles.prices}>  ${data.restaurants[menuNumber-1].menu.items[0].price}   </Text><TouchableOpacity onPress={handleAddOne}><View style={styles.buyButton}><Text style={styles.buyButtonText}>+</Text></View></TouchableOpacity> <TouchableOpacity onPress={handleSubtractOne}><View style={styles.buyButton}><Text style={styles.buyButtonText}>-</Text></View></TouchableOpacity><Text style={styles.text}> {additemone} = ${additemone * data.restaurants[menuNumber-1].menu.items[0].price}</Text></Text>
            <Text />
            <Text style={{fontSize: 20 ,borderColor: 'black', borderWidth: 1, borderRadius: 5, padding: 5, backgroundColor:'#328525', alignSelf: 'center'}}><Text style={styles.text}>{data.restaurants[menuNumber-1].menu.items[1].name}:</Text><Text style={styles.prices}>  ${data.restaurants[menuNumber-1].menu.items[1].price}   </Text><TouchableOpacity onPress={handleAddTwo}><View style={styles.buyButton}><Text style={styles.buyButtonText}>+</Text></View></TouchableOpacity> <TouchableOpacity onPress={handleSubtractTwo}><View style={styles.buyButton}><Text style={styles.buyButtonText}>-</Text></View></TouchableOpacity><Text style={styles.text}> {additemtwo} = ${additemtwo * data.restaurants[menuNumber-1].menu.items[1].price}</Text></Text>
            <View style={styles.descriptionArea}><Text style={styles.text}>{data.restaurants[menuNumber-1].description}</Text></View>
            <TouchableOpacity onPress={() => {postBasketBadge()}}><View style= {styles.checkoutButton}><Text style={styles.buyButtonText}>Checkout ${(additemone * data.restaurants[menuNumber-1].menu.items[0].price) + (additemtwo * data.restaurants[menuNumber-1].menu.items[1].price)}</Text></View></TouchableOpacity>
            <TouchableOpacity onPress={() => [setAdditemone(0), setAdditemtwo(0)]}><View style= {styles.cancelButton}><Text style={styles.buyButtonText}>Cancel</Text></View></TouchableOpacity>
        </View>
    )
      }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'green',
    },

    descriptionArea: {
        alignSelf: 'center',
        width: 375,
        marginTop: 10,
        backgroundColor: '#328525'
    },

    prices:{
        fontSize: 20,
        fontFamily: 'FiraSans-Black',
        color: '#ffcc33',
    },

    buyButton: {
        height: 25,
        width: 35,
        backgroundColor: '#ffcc33',
        borderRadius: 10,
    },

    cancelButton: {
        padding: 5,
        alignSelf: 'center',
        height: 40,
        width: 100,
        backgroundColor: '#ffcc33',
        borderRadius: 8,
        marginTop: 15
    },

    checkoutButton: {
        padding: 5,
        alignSelf: 'center',
        height: 60,
        width: 100,
        backgroundColor: '#ffcc33',
        borderRadius: 8,
        marginTop: 25
    },

    locationButton: {
        alignSelf: 'center',
        height: 30,
        width: 100,
        backgroundColor: '#ffcc33',
        borderRadius: 8,
    },

    buyButtonText: {
        
        fontFamily: 'FiraSans-Medium',
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'top',
        fontSize: 16,
    },

    text: {
        fontFamily: 'FiraSans-Medium',
        color: '#ffcc33',
        fontSize: 17,
        justifyContent: 'center',
        paddingTop: 10,
    
      },

      restoTitle: {
          fontFamily: 'FiraSans-Black_italic',
          color: '#ffcc33',
          fontSize: 28,
          textAlign: 'center',
          paddingTop: 20,
      }
})