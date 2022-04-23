import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
import bck2 from '../assets/bck2.jpg';



const Signup =(props)=>{
    return(
      <ImageBackground source={bck2} style={styles.container}>
        <View  style={styles.container}>
             <View style={{ alignItems: "center",
            justifyContent: "center",  backgroundColor: "white",}}>
            <Text style={{fontSize: 30, color: "#8A39E1", top: 20,  backgroundColor: "white",}}>SIGN UP</Text>
            </View>

<View style={styles.profileContainer}>
          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2,marginLeft: 20,}}>
            Username
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
            Email
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
            Password
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>

          <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
            Confim password
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>
          </View>
          <View style={styles.outerContainer}>
          
        
     
     <View>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Login")}}>
          <Text style={{ color: "white" }}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}>
        <Text style={styles.signup}> You already have account? 
        <Text style={styles.sign}>Log in</Text>
         </Text>
         </TouchableOpacity> 
          </View>         
     </View>

     <View style={styles.last}>
             <Text style={{fontSize: 20, paddingLeft: 20,}}>LoanHippo</Text>
             <Text style={{paddingRight:20,}}><FontAwesome5 name="hippo" size={40} color="black" /></Text>
         </View>

      </View>
      </ImageBackground>


        );
    }
    
    export default Signup;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
          // backgroundColor: "#F194FF",
          height: null,
          width: null,
        },


        innerContainer:{
            flex:80,
         
            // backgroundColor:"#fff",
            // borderWidth:5,
            justifyContent:"center",
            width: 350,
            height:400,
          },
          innerText:{
            fontSize: 20,
            fontWeight: "bold",
            color: "#8A39E1"
            
          },
          loginContainer: {
            flex:20,
            justifyContent:"center",
            alignItems: "center",
          },
          profileContainer:{
            flex:25,
             backgroundColor:"white",
             top: 30,
          },
          outerContainer:{
            flex:40,
            marginHorizontal: 50,
            
        
          },
          btn: {
            padding: 16,
            width: "100%",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8A39E1",
            top: 15,
          },
          // me: {
          //   color: "blue",
          //   paddingVertical: 5,
          //   justifyContent: "flex-end",
          //   padding: 226,
          // },
          signup: {
            padding: 20,
            paddingHorizontal: 10,
            fontSize: 15,
          },
          sign:{
            color: "#8A39E1",
            fontSize: 20,
          },

          last:{
            flexDirection:"row",
            justifyContent:"space-between",
            
                 },


        });


    