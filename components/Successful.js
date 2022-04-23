import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import bck2 from '../assets/bck2.jpg';



const Successful =(props)=>{
    return(
<ImageBackground source={bck2} style={styles.container}>

        <View  style={styles.container}>
            <View style={{justifyContent:"flex-end", alignItems:"flex-end"}}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate("LoanHippo")}}>
            <Ionicons name="close-circle-sharp" size={40} color="black" />
            </TouchableOpacity>
            </View>
             <View style={{ alignItems: "center",
            justifyContent: "center",}}>
            <Text style={{fontSize: 40, color: "#8A39E1",}}>Payment receive</Text>
            </View>

            <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Text>Your payment has been submitted successfully by Loanhippo</Text>
                <Text>Loanhippo the best and fast loan.</Text>
                <Text>THANK YOU.</Text>
            </View>

            <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("RequestLoan")}}>
          <Text style={{ color: "white" }}>RequestLoan</Text>
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

export default Successful;

const styles = StyleSheet.create({
container: {
  flex: 10,
//   backgroundColor: "white",
height: null,
  width: null,
},

last:{
    flexDirection:"row",
    justifyContent:"space-between",
    top:  480,
    
    
         },

         outerContainer:{
            // flex:0.10,
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
