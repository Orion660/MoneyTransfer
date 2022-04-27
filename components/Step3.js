import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,SafeAreaView,Button, Pressable, TouchableOpacity, Image, ImageBackground,Modal,  Alert, } from 'react-native';
import React, {use} from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';








const RequestLoan =(props)=>{
    return(
      <ImageBackground source={fo3} style={styles.container}>
        <View  style={styles.container}>
            <View style={styles.Request}>
                <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 50, top: 10, color: "black",}}>Send Money</Text> 
            </View>
            
            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Momo")}}>  
  <View style={styles.money}>
  <Text>
  <Ionicons name="md-person-circle-sharp" size={40} color="black" />
  </Text>
  <Text style={{top: 10, fontSize: 20,}}>Mobile Money</Text>
  <Text style={{top:10, paddingLeft: 160,}}>
  <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
  </Text>
  </View>
  </TouchableOpacity>


  <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Momo")}}>
  <View style={{paddingLeft: 20, flexDirection: "row", backgroundColor: "white",top: 40,}}>
  <Text style={{top:3,}}>
  <FontAwesome name="bank" size={40} color="blue" />
  </Text>
  <Text style={{top: 10, fontSize: 20,}}>Bank</Text>
  <Text style={{top:10, paddingLeft: 230,}}>
  <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
  </Text>
  </View>
  </TouchableOpacity>


<View style={{top: 300, justifyContent:"center", flexDirection:"row-reverse",}}>
  <Text>secure & encrypted payment</Text>
</View>

         

         

        

           </View> 
           </ImageBackground>
        );
    }
    
    export default RequestLoan;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
          // backgroundColor: "#F194FF",
          height: null,
          width: null,
        },

        Request:{
            flexDirection:"row",
            justifyContent:"center",
            paddingRight: 20,
            flex: 0.10,
            top: 30,
                 },

                 amount:{
                    flexDirection: "column",
                    justifyContent:"space-between",
                    top: 30,
                         },
        amt:{
            top: 30,
            flex: 0.2,
            // backgroundColor: "black"
        },

        money:{
          paddingLeft: 20,
           flexDirection: "row", 
           backgroundColor:"white", 
           top: 20, 
        },

        // terms:{
        //     width: "50%",
        //     height: 50,
        //     backgroundColor: "blue",
        //     marginLeft: 20,
        //     marginTop: 40,
        //     borderRadius: 50, 
        // },

        modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        },
        button: {
          borderRadius: 20,
          padding: 8,
          elevation: 2
        },

        buttonOpen: {
          backgroundColor: "#D5E986",
          marginLeft: 100,
           marginTop: 40,
           width: "50%",
          height: 50,
        },
        buttonClose: {
          backgroundColor: "#2196f3",
          width: "80%",
          
          
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        },

        centeredView: {
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
          
        },

        lov:{
          height: 300,
           width: 300,
            borderRadius: 250, 
      },
      
      pic: {
 justifyContent:"center",
 alignItems:"center",
 top: 30,
      },
      signin:{
        // justifyContent:"center",
        // alignItems:"center",
        marginTop: 90,
        height: 50,
           width: "50%",
            borderRadius: 22, backgroundColor: "#8A39E1",
            marginLeft: 100,
            top: 50,
      },

     
       

            

            



    })
