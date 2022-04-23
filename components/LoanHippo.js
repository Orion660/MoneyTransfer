import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
import bck2 from '../assets/bck2.jpg';



const LoanHippo =(props)=>{
    return(
        <ImageBackground source={bck2} style={styles.container}>
        <View  style={styles.container}>

         <View style={styles.hippo}>
         <Image style= {styles.image} source={require("../assets/loan.jpg")}></Image>
         </View>
         <View style={styles.all}>
         <TouchableOpacity  onPress={()=>{props.navigation.navigate("RequestLoan")}}> 
         <View style={styles.hip}>
             <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20,}}>Request Loan</Text>
             <Text>
             <MaterialIcons name="arrow-forward-ios" size={30} color="black" />
             </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity  onPress={()=>{props.navigation.navigate("Payloan")}}> 
         <View style={styles.hip1}>
             <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20,}}>RepayLoan</Text>
             <Text>
             <MaterialIcons name="arrow-forward-ios" size={30} color="black" />
             </Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity  onPress={()=>{props.navigation.navigate("Tnd")}}> 
         <View style={styles.hip2}>
             <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20,}}>Terms&Conditions</Text>
             <Text>
             <MaterialIcons name="arrow-forward-ios" size={30} color="black" />
             </Text>
         </View>
         </TouchableOpacity>
    
        
         <TouchableOpacity  onPress={()=>{props.navigation.navigate("Home")}}> 
         <View style={styles.hip5}>
             <Text  style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 20,}}>Log Out</Text>
             <Text>
             <MaterialIcons name="arrow-forward-ios" size={30} color="black" />
             </Text>
         </View> 
         </TouchableOpacity>
         </View>
         <View style={styles.last}>
             <Text style={{fontSize: 20, paddingLeft: 20,}}>LoanHippo</Text>
             <Text style={{paddingRight:20,}}><FontAwesome5 name="hippo" size={40} color="black" /></Text>
         </View>
    

              </View>
              </ImageBackground>
        );
    }
    
    export default LoanHippo;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
        //   backgroundColor: "#F194FF",
          height: null,
          width: null,
        },
    hippo: {
        // backgroundColor: "white",
        flex: 0.3,
        top: 10,
    },

all: {
justifyContent: "space-evenly",
flex: 0.6,
},

    hip: {
        backgroundColor: "#D5E986",
        flexDirection: "row",
       justifyContent: "space-between" ,
        
    },
    hip1: {
        backgroundColor: "#D5E986",
        flexDirection: "row",
       justifyContent: "space-between"
       
        
    },
    hip2: {
        backgroundColor: "#D5E986",
        flexDirection: "row",
       justifyContent: "space-between" ,
        
        
    },
    hip3: {
        backgroundColor: "grey",
        flexDirection: "row",
       justifyContent: "space-between" ,
        
        
    },
    hip4: {
        backgroundColor: "#D5E986",
        flexDirection: "row",
       justifyContent: "space-between" ,   
    },
    hip5: {
        backgroundColor: "#D5E986",
        flexDirection: "row",
       justifyContent: "space-between" ,
        
        
    },

    image: {
        width: 400,
        height:200,
     },

     last:{
flexDirection:"row",
justifyContent:"space-between",
top: 50,
     },








        })
          