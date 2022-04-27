import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';




const Login =(props)=>{
    return(
      
      <ImageBackground source={fo3} style={styles.container}>
        <View  style={styles.container}>
             <View style={{ alignItems: "center",
            justifyContent: "center",  flex: 30,}}>
            <Text style={{fontSize: 30, color: "#8A39E1",  top: 20,}}>Cross-channel payments</Text>
            <Text style={{top: 30,}}>Simple. secure.fast and easy to use</Text>
            </View>

<View style={styles.profileContainer}>
         
          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
            Email
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginVertical: 2, marginLeft: 20, marginRight: 20,}}/>

          <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginLeft: 20,}}>
            Password 
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginVertical: 2, marginLeft: 20, marginRight: 20,}}/>
          <TouchableOpacity onPress={()=>{props.navigation.navigate("Fg")}}>
          <Text style={styles.me}>Forget Password?</Text>
          </TouchableOpacity>
     </View>

     <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("MoneyTransfer")}}>
          <Text style={{ color: "white" }}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{props.navigation.navigate("Signup")}}>
        <Text style={styles.signup}> Creat an account? 
        <Text style={styles.sign}>Signup</Text>
         </Text>
         </TouchableOpacity>
     </View>

     {/* <View style={styles.last}>
             <Text style={{fontSize: 20, paddingLeft: 20,}}>LoanHippo</Text>
             <Text style={{paddingRight:20,}}><FontAwesome5 name="hippo" size={40} color="black" /></Text>
         </View>

      </View> */}

      </View>
      </ImageBackground>


        );
    }
    
    export default Login;
    
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
            flex:40,
            top: 20,
            // backgroundColor:"white",
          },
          outerContainer:{
            flex:15,
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
          me: {
            color: "blue",
            paddingVertical: 5,
            justifyContent: "flex-end",
            padding: 226,
          },
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

