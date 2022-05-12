// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,ActivityIndicator} from 'react-native';
// import React from "react";
// import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
// import fo3 from '../assets/fo3.jpg';
// import firebase from '../database/firebase';



//  const Signup =(props)=>{

  

 
//     return(
//       <ImageBackground source={fo3} style={styles.container}>
//         <View  style={styles.container}>
//              <View style={{ alignItems: "center",
//             justifyContent: "center",   flex: 30,}}>
//             <Text style={{fontSize: 30, color: "#8A39E1", top: 20,}}>Create a free account</Text>
//             </View>

// <View style={styles.profileContainer}>
//           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2,marginLeft: 20,}}>
//             First Name
//             </Text>
//           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>

//           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
//             Middle Name
//             </Text>
//           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>

//           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
//             Last Name
//             </Text>
//           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20, }}/>

//           <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginLeft: 20, }}>
//             Create password
//             </Text>
//           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>
//           <Text style={{paddingLeft:20,}}>6 characters containing a lowercase letter, uppercase letter and a number</Text>
//           <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginLeft: 20, top: 10, }}>
//             Confim password
//             </Text>
//           <TextInput style={{fontSize: 15, top:10,  marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>
         
//           </View>
//           <View style={styles.outerContainer}>
          
        
     
//      <View>
//      <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Login")}}>
//           <Text style={{ color: "white" }}>Sign Up</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}>
//         <Text style={styles.signup}> You already have account? 
//         <Text style={styles.sign}>Log in</Text>
//          </Text>
//          </TouchableOpacity> 
//           </View>         
//      </View>

   

//       </View>
//       </ImageBackground>


//         );
//   }


    
//     export default Signup;
    
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
//              top: 20,
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


// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from './database/firebase';

export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
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
  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
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
            justifyContent: "center",   flex: 0.3,}}>
            <Text style={{fontSize: 30, color: "#8A39E1", }}>Create a free account</Text>
            </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
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
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        /> 
        <Text style={{paddingLeft:20,}}>6 characters containing a lowercase letter, uppercase letter and a number</Text>  
        <Button
          color="#8A39E1"
          title="Signup"
          onPress={() => this.registerUser()}
        />
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Login')}>
          Already Registered? Click here to login
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
  }
});