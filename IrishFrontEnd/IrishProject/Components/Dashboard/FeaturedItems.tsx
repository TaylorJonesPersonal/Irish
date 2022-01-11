import { isTemplateElement } from '@babel/types';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, Text, StyleSheet,Image, FlatList, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import * as RestoData from '../../restaurants.json';
import { Bottom } from './Bottom';
import { newMenu } from '../../Redux/actions/menuActions';
import { useQuery, gql } from '@apollo/client';



export const FeaturedItems = (props:any) => {

  const appState = useSelector<any, any>((state) => state);

  useEffect(() => {
    console.log("app state changed");
  }, [appState])

  // GraphQL query
  const RESTAURANT = gql`
    query {
        restaurants(count:6) {
            id
            name
            imageURL
        }
    }
    `;

const {data, loading, error} = useQuery(RESTAURANT);


  const dispatch = useDispatch();
  const navigation = props.navigation;

  let completeNav = (itemID:number, itemName: string) => {
    
    dispatch(
      newMenu(itemID, itemName)
    )
   
    navigation.navigate('MenuStack', {navigation: props.navigation});
  }

  


  const Item = ({item}:any) => {
    console.log(item.id);
  return(
    <View style={styles.featuredarea}>
        <Text style={styles.text}>{item.name}</Text>
        <TouchableOpacity onPress={() => completeNav(item.id, item.name)}>
        <Image style={{height: 200, width: 300}} source={{uri:item.imageURL}} />
        </TouchableOpacity>
    </View>
)
}

  const renderItem = ( { item }:any) => {
    return(
      <Item item={item}/>
    )
  }

    if(loading == true){
      return(
        <View><Text style={styles.text}>Loading...</Text></View>
      )
    } else{

    return(
    <View style={styles.contentarea}>
        <Text style={styles.textsmaller}>Look at the state o'you! You look knackered. We got chips and pints of gat.  Take a look at today's specials:</Text>
          <FlatList 
          data={data.restaurants}
          renderItem={renderItem}
          keyExtractor={({ id }, index) => id}
          contentContainerStyle={{paddingBottom: 20}}
          />
          <Bottom />
    </View>
    )}
    }
const styles = StyleSheet.create({

      contentarea: {
        flex: 1.2,
        backgroundColor: "green", 
        alignItems: 'center',
      },
      featuredarea:{
          borderTopColor: 'black',
          borderBottomColor: 'black',
          borderStyle: 'solid',
          top: 20,
          borderRadius: 10,
          alignItems: 'center',
          width: 320,
          height: 240,
          backgroundColor: "#FDFDFD",
          opacity: .95,
          marginTop: 3
      },
      textsmaller: {
        fontFamily: 'FiraSans-Medium',
        color: '#ffcc33',
        fontSize: 22,
        textAlign: 'center',
    
      },
      text: {
        fontFamily: 'FiraSans-Medium',
        color: 'black',
        fontSize: 20,
        justifyContent: 'center',
        opacity: 1
    
      },
      featureditem:{
          borderRadius: 20,
          top: 10,
          width: 200,
          height: 133.20
      },
      stars: {
          top: 10,
          width: 75,
          height: 24.123
      }
    })