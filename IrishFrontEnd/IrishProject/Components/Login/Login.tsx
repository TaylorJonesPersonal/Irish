import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TextInput, ImageBackground, Text, TouchableOpacity,StatusBar, Animated } from 'react-native';
import { useQuery, gql, useMutation } from '@apollo/client';
import FadeInView from './FadeInView';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../Redux/actions/ActionTypes';
import { IUser } from '../../Redux/types/types';
import { ToggleButton } from './ToggleButton';
import { gender } from '../../Redux/actions/UserActions';

export const Login = ({navigation, route}: any) => {

 
    

    // AppState check
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    //local states ------------------------------------------
    
    //show visiblity states
    const [showWarning,setShowWarning] = useState(false);
    const [showsignup, setShowsignup] = useState(false);

    //login states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //signup states
    const [signupfirstname, setSignupfirstname] = useState("");
    const [signuplastname, setSignuplastname] = useState("");
    const [signupemail, setSignupemail] = useState("");
    const [signupusername, setSignupusername] = useState("");
    const [signuppassword, setSignuppassword] = useState("");
 // -------------------------------------------------------------

 // state changes signup ----------------------------------------
 let signupInitialFirstName= (props:any) => {
    setSignupfirstname(props);
}

let signupInitialLastName= (props:any) => {
    setSignuplastname(props);
}

let signupInitialEmail= (props:any) => {
    setSignupemail(props);
}

let signupInitialUsername= (props:any) => {
    setSignupusername(props);
}

let signupInitialPassword= (props:any) => {
    setSignuppassword(props);
}




 // -------------------------------------------------------------



    // GraphQL query
  const CUSTOMER = gql`
  query GET_CUSTOMER($username: String) {
      customer(username: $username) {
        id,
        firstName,
        lastName,
        email,
        username,
        password,
        gender,
      }
  }
  `;

  const {data, loading, error} = useQuery(CUSTOMER, { variables: {username:username}});



    // login validation --------------------------

    let completeNav = (props:any) =>{

        if(loading) {
            console.log("Please wait...");
        }

        if(error || data.customer==null) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 2000)
        } else if(password != data.customer.password){
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 2000)
        } else{

            let loggedIn:IUser = {
                id: data.customer.id,
                firstName: data.customer.firstName,
                lastName: data.customer.lastName,
                email: data.customer.email,
                username: data.customer.username,
                password: data.customer.password,
                gender: data.customer.gender,
                cart: {
                    numberOfItems: 0,
                    totalPrice: 0,
                },
                favorites: []
            }

            dispatch({
                type: LOGIN,
                payload: loggedIn
            })
            navigation.navigate("DashboardStack");
        }
    }
    // -------------------------------------------
     // Signup Completion -------------------------
        let CompleteSignup = () => {
        const COMPLETE_SIGNUP = gql`
        mutation CREATE_CUSTOMER($firstName: String, $lastName: String, $email: String, $username: String, $password: String, $gender: String) {
            createCustomer(firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password, gender: $gender) {
              id,
              firstName,
              lastName,
              email,
              username,
              password,
              gender,
            }
        }
        `
    
        const [signupMutate, { data, loading, error }] = useMutation(COMPLETE_SIGNUP, {variables: {
            firstName: signupfirstname,
            lastName: signuplastname,
            email: signupemail,
            username: signupusername,
            password: signuppassword,
            gender: appState.user.gender
        }});
    
    
        return(
            <TouchableOpacity onPress={e => 
                [
                signupMutate(),
                setShowsignup(false)]
                }>
                <Text style={styles.loginOpacityText}>Complete Signup</Text>
                </TouchableOpacity>
        )
    }

    //--------------------------------------------


    // Signup screen methods ---------------------
    let signup = () => {
        setShowsignup(true);
    }

    let loginInstead = () => {
        setShowsignup(false);
    }
    // -------------------------------------------
    



    // login state changes --------------------------
    let handleUsernameChange = (props:any) => {
        setUsername(props);
    }

    let handlePasswordChange = (props:any) => {
        setPassword(props);
    }
// ---------------------------------------------------

    //

    if(showWarning==false && showsignup == false)
    {
    return (

        
        <View style={styles.container}>
             <StatusBar hidden={true} />

            <ImageBackground source={require('../../images/clover.jpeg')} resizeMode='cover' style={styles.image}>
                <View style={styles.formInput}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Please Login:</Text>
                    <TextInput placeholder="Username" style={styles.input} onChangeText={handleUsernameChange}></TextInput>
                    <TextInput placeholder="Password" style={styles.input} onChangeText={handlePasswordChange}></TextInput>
                </View>
                <View style={styles.loginOpacity}>
                    <TouchableOpacity onPress={completeNav}><Text style={styles.loginOpacityText}>Login</Text></TouchableOpacity>
                    </View>
                    <View style={styles.loginOpacity}>
                    <TouchableOpacity onPress={signup}><Text style={styles.loginOpacityText}>Signup</Text></TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}else if(showsignup == true){
    return(
        <View style={styles.container}>
        <StatusBar hidden={true} />
    
       <ImageBackground source={require('../../images/clover.jpeg')} resizeMode='cover' style={styles.image}>
           <View style={styles.formInput}>
               <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Signup here:</Text>
               <TextInput placeholder="First Name" style={styles.input} onChangeText={signupInitialFirstName}></TextInput>
               <TextInput placeholder="Last Name" style={styles.input} onChangeText={signupInitialLastName}></TextInput>
               <TextInput placeholder="Email" style={styles.input} onChangeText={signupInitialEmail}></TextInput>
               <TextInput placeholder="Username" style={styles.input} onChangeText={signupInitialUsername}></TextInput>
               <TextInput placeholder="Password" style={styles.input} onChangeText={signupInitialPassword}></TextInput>
               <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
               <Text style={{color: 'white', fontSize: 18, fontFamily: 'FiraSans-Medium'}}>Lad?   </Text><TouchableOpacity><View style={{backgroundColor: 'black', borderRadius: 25, height: 15, width: 40, marginTop: 5, alignSelf:'center'}}><ToggleButton/></View></TouchableOpacity><Text style={{color: 'white', fontSize: 18, fontFamily: 'FiraSans-Medium'}}>   Lass?</Text>
               </View>
           </View>
           <View style={styles.loginOpacity}>
           <CompleteSignup />
               </View>
           <View style={styles.loginOpacity}>
               <TouchableOpacity onPress={loginInstead}><Text style={styles.loginOpacityText}>Login Instead...</Text></TouchableOpacity>
               </View>
       </ImageBackground>
    </View>
    )
}

else{
     return(
<View style={styles.container}>
             <StatusBar hidden={true} />

            <ImageBackground source={require('../../images/clover.jpeg')} resizeMode='cover' style={styles.image}>
            <FadeInView inputText="Incorrect credentials. Please try again." />
            </ImageBackground>
            </View>
     )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    loginOpacity: {
        marginTop: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'green',
        opacity: .8,
        alignSelf: 'center',
        width: 200,
    },

    loginOpacityText: {
        fontSize: 18,
        color: 'white',
    },

    image: {
        flex: 1,
        justifyContent: 'center',

    },

    formInput: {
        borderRadius: 2,
        width: 200,
        left: 95,
        opacity: .75,
        backgroundColor: 'black'
    },

    warningInput: {
        borderRadius: 5,
        width:200,
        left: 95,
        backgroundColor: 'green'
    },

    input: {
        height: 45,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2.5
    }

})