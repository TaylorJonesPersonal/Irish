import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useQuery, gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-elements';

export const RestaurantMap = (props:any) => {
  const restaurantName = props.route.params.restaurantName;
  const restaurantDescription = props.route.params.restaurantDescription;
  const menuNumber = useSelector<any,any>((state) => state.menu.menuNumber);

// GraphQL query
const RESTAURANT = gql`
query{
  restaurants(count: 6){
    name
    restaurantLatitude
    restaurantLongitude
  }
}
`;

const {data, loading, error} = useQuery(RESTAURANT);

if(loading){
  return(
    <View>
    <Text>Loading...</Text>
    </View>
  )
} else if(error){
console.log(error);
} else{
  const restaurantLatitude = data.restaurants[menuNumber - 1].restaurantLatitude;
  const restaurantLongitude = data.restaurants[menuNumber - 1].restaurantLongitude;

    return(
      <View style={styles.container}>
        <MapView style={styles.map}
    initialRegion={{
      latitude: restaurantLatitude,
      longitude: restaurantLongitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    }}
  >
      <Marker
            pinColor='green'
            coordinate={{latitude: restaurantLatitude,longitude: restaurantLongitude}}
            title={restaurantName}
            description={restaurantDescription}
         />
         </MapView>
         </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: 'green',
  },
  map: {
    flex: 1,
  }
})