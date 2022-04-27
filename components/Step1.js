import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, TextInput, Alert, ImageBackground,FlatList, ScrollView,  } from 'react-native';
import React,  {useState} from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons,  } from '@expo/vector-icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { TabRouter } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import fo3 from '../assets/fo3.jpg';
 






const Step1 =(props)=>{
    
    return(
      <ImageBackground source={fo3} style={styles.container}>
        <ScrollView  style={styles.container}>
             <View style={{ alignItems: "center",
            justifyContent: "center", top: 20, flex: 0.2}}>
            <Text style={{fontSize: 20, color: "black", }}>Select Account issuer</Text>
            </View>



            <View style={ styles.tap}>
              <Text style={{paddingLeft: 10,}}>Tap to select an account issuer</Text>
            </View>

            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Step2")}}>
            <View style={styles.mtn}>
              <Text>
              <Image style= {styles.lov} source={require("../assets/mtn.png")}></Image>
              </Text>
              <Text style={{top:10, paddingRight:20,}}>
              <MaterialIcons name="arrow-forward-ios" size={40} color="black" />
              </Text>
            </View>
            </TouchableOpacity>


<TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Step2")}}>
            <View style={styles.mtn1}>
              <Text>
              <Image style= {styles.lov} source={require("../assets/vodafone.jpg")}></Image>
              </Text>
              <Text style={{top:10, paddingRight:20,}}>
              <MaterialIcons name="arrow-forward-ios" size={40} color="black" />
              </Text>
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Step2")}}>
            <View style={styles.mtn2}>
              <Text>
              <Image style= {styles.lov} source={require("../assets/AirtelTigo.jpg")}></Image>
              </Text>
              <Text style={{top:10, paddingRight:20,}}>
              <MaterialIcons name="arrow-forward-ios" size={40} color="black" />
              </Text>
            </View>
            </TouchableOpacity>


<TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Step2")}}>
            <View style={styles.mtn3}>
              <Text>
              <Image style= {styles.lov} source={require("../assets/glo.jpg")}></Image>
              </Text>
              <Text style={{top:10, paddingRight:20,}}>
              <MaterialIcons name="arrow-forward-ios" size={40} color="black" />
              </Text>
            </View>
            </TouchableOpacity>


        


        </ScrollView>
        </ImageBackground>


);
}

export default Step1;

const styles = StyleSheet.create({
    container: {
      flex: 10,
      // backgroundColor: "#F194FF",
      height: null,
      width: null,
    },

tap:{
 backgroundColor: "grey",
 flex: 0.1,
 top: 20,
},

lov:{
  height: 60,
   width: 60,
    borderRadius: 25, 
  
},

mtn:{
  backgroundColor: "white",
   flex: 0.1,
   top: 40,
   flexDirection: "row",
   justifyContent: "space-between",
   
},

mtn1:{
  backgroundColor: "white",
   flex: 0.1,
   top: 60,
   flexDirection: "row",
   justifyContent: "space-between",
   
},

mtn2:{
  backgroundColor: "white",
   flex: 0.1,
   top: 80,
   flexDirection: "row",
   justifyContent: "space-between",
   
},

mtn3:{
  backgroundColor: "white",
   flex: 0.1,
   top: 100,
   flexDirection: "row",
   justifyContent: "space-between",
   
},


})
          