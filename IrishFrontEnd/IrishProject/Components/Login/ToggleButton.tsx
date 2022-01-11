import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { gender } from '../../Redux/actions/UserActions';


export const ToggleButton = React.memo(function ToggleButton() {

  const appState = useSelector<any, any>((state) => state);

  const dispatch = useDispatch();

    const [stationary, setStationary] = useState(true);
    const [toggle, setToggle] = useState(false);

const ToggleButtonStationary  = () => {
  
    return (
        <View style={{backgroundColor: 'skyblue', borderRadius: 25, height: 10, width: 20, marginTop: 2}} />
    )
}

const ToggleButtonForward = () => {
    const startValue = new Animated.Value(2);
    const endValue = 17;
    
    React.useEffect(() => {
        Animated.spring(
          startValue,
          {
            toValue: endValue,
            speed: 1,
            useNativeDriver: true
          }
        ).start();
      }, [])

// You can then use your `FadeInView` in place of a `View` in your components:


  return (
    <View>
      <Animated.View style={{backgroundColor: 'pink', borderRadius: 25, height: 10, width: 20, marginTop: 2, transform:[{translateX:startValue}]}} />
    </View>
  )
}

const ToggleButtonBack = (props:any) => {
    const startValue = new Animated.Value(17);
    const endValue = 2;


    React.useEffect(() => {
        Animated.spring(
          startValue,
          {
            toValue: endValue,
            speed: 1,
            useNativeDriver: true
          }
        ).start();
      }, [])

// You can then use your `FadeInView` in place of a `View` in your components:
  return (
    <View>
      <Animated.View style={{backgroundColor: 'skyblue', borderRadius: 25, height: 10, width: 20, marginTop: 2, transform:[{translateX:startValue}]}} />
    </View>
  )
}

if(stationary == true && toggle == false){

return(
    <TouchableOpacity onPress={() => [ setStationary(false), setToggle(true), dispatch(gender("lass"))]}><ToggleButtonStationary/></TouchableOpacity>
)

} else if(stationary == false && toggle == false) {
  return(
      <TouchableOpacity onPress={() => [setToggle(true), dispatch(gender("lass"))]}><ToggleButtonBack /></TouchableOpacity>
  ) 
  } else if(stationary == false && toggle == true){
    return(
    <TouchableOpacity onPress={() => [setToggle(false), dispatch(gender("lad"))]}><ToggleButtonForward/></TouchableOpacity>
    )
} else{
      return(
        <TouchableOpacity onPress={() => [ setStationary(false), setToggle(true)]}><ToggleButtonStationary/></TouchableOpacity>
      )
    }
})