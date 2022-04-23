import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, TextInput, Alert, ImageBackground,FlatList, ScrollView,  } from 'react-native';
import React,  {useState} from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons,  } from '@expo/vector-icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { TabRouter } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import bck2 from '../assets/bck2.jpg';
 






const Step1 =(props)=>{
    // const [checkbox, setCheckbox]= useState(checkbox);
    const [female, setFemale]= useState(false);
    const [male, setMale]= useState(false);
    const [oldvoterid, setOldVoterID]= useState(false);
    const [newvoterid, setNewVoterID ]= useState(false);
    const [passport, setPassport]= useState(false);
    const [driverslicense, setDriversLicense]= useState(false);



    const touch = [] 

    const Click = () =>{
  if(female === true){
      touch.push("female")
  }

  if(male === true){
    touch.push("male")
}

if(oldvoterid === true){
    touch.push("oldvoterid")
}

if(newvoterid === true){
    touch.push("newvoterid")
}

if(passport === true){
    touch.push("passport")
}

if(driverslicense === true){
    touch.push("driverslicense")
}


  Alert.alert ("touch","hello user","your touch are" + touch.toString())
    }
    return(
      <ImageBackground source={bck2} style={styles.container}>
        <ScrollView  style={styles.container}>
             <View style={{ alignItems: "center",
            justifyContent: "center", top: 5,}}>
            <Text style={{fontSize: 40, color: "#8A39E1", }}>Personal Details</Text>
            </View>

            <View style={styles.profileContainer}>
         
          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
            First name
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

          <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
            Middle name
            </Text>
            <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

            <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
            Last name
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
     </View>

       <View style={styles.chart}>
       <View style={styles.smallcontainer}>
         <Text style={styles.gender}>Gender</Text>
           <CheckBox 
         title="female" checked={female} checkcolor="green"
          onPress={() => setFemale(!female)}
         />  
  <CheckBox 
         title="male" checked={male} checkcolor="green"
          onPress={() => setMale(!male)}
         />  
         </View>
       </View>

       <View style={styles.profileContainer}>
         
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Date of birth
           </Text>
         <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

         <Text style={{color: "black", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Email address
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Alternate phone number
           </Text>
         <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
    </View>

    <View style={styles.chart2}>
       <View style={styles.ID}>
         <Text style={styles.gender2}>ID type (select one)</Text>
           <CheckBox 
         title="oldvoterid" checked={oldvoterid} checkcolor="green"
          onPress={() => setOldVoterID(!oldvoterid)}
         />  
  <CheckBox 
         title="newvoterid" checked={newvoterid} checkcolor="green"
          onPress={() => setNewVoterID(!newvoterid)}
         />  
           <CheckBox 
         title="passport" checked={passport} checkcolor="green"
          onPress={() => setPassport(!passport)}
         />  
           <CheckBox 
         title="driverslicense" checked={driverslicense} checkcolor="green"
          onPress={() => setDriversLicense(!driverslicense)}
         />  
         </View>
       </View>

       <View style={styles.profileContainer}>
         
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2,  marginLeft: 20,}}>
           ID number:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1,  marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Post address:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1,  marginRight: 20, marginLeft: 20,}}/>
           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           City or town:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
           </View>

           <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Step2")}}>
          <Text style={{ color: "white" }}>Continue</Text>
        </TouchableOpacity>
        </View>


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

    smallcontainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "blue",
    },

    chart: {
            width: "90%",
            height: 50,
            backgroundColor: "#1273de",
            marginTop: 10,
            borderRadius: 50,
        },

         gender:{
             marginLeft: 10,
             marginStart: 20,
             paddingTop:11,
             fontWeight: "bold",
            fontSize: 20,
           
            },

            ID:{
                flexDirection: "column",
                justifyContent: "space-around",
            },

            gender2:{
                marginLeft: 10,
                marginStart: 20,
                paddingTop:11,
                fontWeight: "bold",
               fontSize: 20,
            },

            chart2: {
                width: "90%",
                height: 220,
                backgroundColor: "#1273de",
                marginTop: 10,
                borderRadius: 50,
                marginLeft: 20,
            },

            outerContainer:{
                flex:20,
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


})
          