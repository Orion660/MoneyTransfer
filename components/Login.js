// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
// import React from "react";
// import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
// import fo3 from '../assets/fo3.jpg';




// const Login =(props)=>{
//     return(
      
//       <ImageBackground source={fo3} style={styles.container}>
//         <View  style={styles.container}>
//              <View style={{ alignItems: "center",
//             justifyContent: "center",  flex: 30,}}>
//             <Text style={{fontSize: 30, color: "#8A39E1",  top: 20,}}>Cross-channel payments</Text>
//             <Text style={{top: 30,}}>Simple. secure.fast and easy to use</Text>
//             </View>

// <View style={styles.profileContainer}>
         
//           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
//             Email
//             </Text>
//           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginVertical: 2, marginLeft: 20, marginRight: 20,}}/>

//           <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
//             Password 
//             </Text>
//           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginVertical: 2, marginLeft: 20, marginRight: 20,}}/>
//           <TouchableOpacity onPress={()=>{props.navigation.navigate("Fg")}}>
//           <Text style={styles.me}>Forget Password?</Text>
//           </TouchableOpacity>
//      </View>

//      <View style={styles.outerContainer}>
//      <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("MoneyTransfer")}}>
//           <Text style={{ color: "white" }}>Log In</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={()=>{props.navigation.navigate("Signup")}}>
//         <Text style={styles.signup}> Creat an account? 
//         <Text style={styles.sign}>Signup</Text>
//          </Text>
//          </TouchableOpacity>
//      </View>

//       </View>
//       </ImageBackground>


//         );
//     }
    
//     export default Login;
    
//     const styles = StyleSheet.create({
//         container: {
//           flex: 10,
//            backgroundColor: "white",
//           height: null,
//           width: null,
//         },


//         innerContainer:{
//             flex:80,
           
//             justifyContent:"center",
//             width: 350,
//             height:400,
//           },
//           innerText:{
//             fontSize: 20,
//             fontWeight: "bold",
//             color: "#8A39E1"
            
//           },
//           loginContainer: {
//             flex:20,
//             justifyContent:"center",
//             alignItems: "center",
//           },
//           profileContainer:{
//             flex:40,
//             top: 20,
           
//           },
//           outerContainer:{
//             flex:15,
//             marginHorizontal: 50,
        
//           },
//           btn: {
//             padding: 16,
//             width: "100%",
//             borderRadius: 50,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#8A39E1",
//             top: 15,
//           },
//           me: {
//             color: "blue",
//             paddingVertical: 5,
//             justifyContent: "flex-end",
//             padding: 226,
//           },
//           signup: {
//             padding: 20,
//             paddingHorizontal: 10,
//             fontSize: 15,
//           },
//           sign:{
//             color: "#8A39E1",
//             fontSize: 20,
            
//           },

//           last:{
//             flexDirection:"row",
//             justifyContent:"space-between",
            
//                  },


//         });


import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity, } from 'react-native';
import firebase from './database/firebase';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 

<View style={{ alignItems: "center",
            justifyContent: "center",  flex: 0.4,}}>
            <Text style={{fontSize: 30, color: "#8A39E1",  }}>Cross-channel payments</Text>
            <Text style={{top: 5,}}>Simple. secure.fast and easy to use</Text>
            </View>

        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={
            (val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />  
        <Text
          onPress={() => this.props.navigation.navigate("Fg")}>
          <Text style={styles.me}>Forget Password?</Text>
          </Text>       
         
        <Button        
          color="#8A39E1"
          title="Signin"
          onPress={() => this.userLogin()}
        />   
      
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#e0ffff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#8A39E1',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  me: {
    color: "blue",
    paddingVertical: 5,
    justifyContent: "flex-end",
    padding: 226,
  },
});
