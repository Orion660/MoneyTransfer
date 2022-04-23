import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import bck2 from '../assets/bck2.jpg';



const Payloan =(props)=>{
    return(
<ImageBackground source={bck2} style={styles.container}>

        <View  style={styles.container}>
            
        <View style={styles.firstcontainer}>
       <View>
         <Text style={{color:"#8A39E1",fontSize:30,}}>LoanHippo</Text>
       </View>
        <View>
        <Text style={{paddingRight:20,}}><FontAwesome5 name="hippo" size={80} color="#8A39E1" /></Text>
       </View> 
      </View>
      <View style={styles.secondcontainer}>
        <Text style={{fontSize:50,color:"#8A39E1"}}>REPAYLOAN</Text>
      </View>
      <View style={styles.lastcontainer}>
        <TextInput style={{borderWidth:5,backgroundColor:"#fff",fontSize:20,marginVertical:15}} placeholder=' 1)Repay your own amount'/>
        <TextInput style={{borderWidth:5,backgroundColor:"#fff",fontSize:20,marginVertical:15}} placeholder=' 2)Repay full loan amount'/>
        <TextInput style={{borderWidth:5,backgroundColor:"#fff",fontSize:20,marginVertical:15}} placeholder=' 3)Enter Phonenumber'/>
        <TextInput style={{borderWidth:5,backgroundColor:"#fff",fontSize:20,marginVertical:15}} placeholder=' 4)Enter Pin to confirm'/>
      </View>

      <View style={styles.last}>
             <Text style={{fontSize: 20, paddingLeft: 20,}}>LoanHippo</Text>
             <Text style={{paddingRight:20,}}><FontAwesome5 name="hippo" size={40} color="black" /></Text>
         </View>

         <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Successful")}}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
        </View>

            
            </View>
            </ImageBackground>

         


);
}

export default Payloan;

const styles = StyleSheet.create({
container: {
  flex: 10,
//   backgroundColor: "white",
height: null,
  width: null,
},

firstcontainer:{
  flex:0.20,
  // backgroundColor:"#CE49BF",
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  paddingHorizontal:8,
},
secondcontainer:{
  flex:0.15,
  // backgroundColor:"yellow",
  justifyContent:"center",
  alignItems:"center"
},
lastcontainer:{
  flex:0.30,
  backgroundColor:"white"
},

last:{
  flexDirection:"row",
  justifyContent:"space-between",
  top: 252, 
  
       },

       outerContainer:{
        flex:0.10,
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






});

