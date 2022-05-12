import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Fg =(props)=>{
    return(
      <ImageBackground source={fo3} style={styles.container}>
        <View  style={styles.container}>
             <View style={{ alignItems: "center",
            justifyContent: "center",}}>
            <Text style={{fontSize: 30, color: "black", top: 40,}}>Forget Password</Text>
            </View>

<View style={styles.profileContainer}>
          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2 , marginRight: 20, marginLeft: 20,}}>
            Email
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1 , marginRight: 20, marginLeft: 20,}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2 , marginRight: 20, marginLeft: 20,}}>
            Phone number
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1 , marginRight: 20, marginLeft: 20,}}/>

          <Text style={{color: "black", fontSize: 20, marginVertical: 2 , marginRight: 20, marginLeft: 20,}}>
            New password
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1 , marginRight: 20, marginLeft: 20,}}/>

          <Text style={{color: "black", fontSize: 20, marginVertical: 2 , marginRight: 20, marginLeft: 20,}}>
          Confim password
            </Text>
          <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1 , marginRight: 20, marginLeft: 20,}}/>
          
     </View>

     
     <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Login")}}>
          <Text style={{ color: "white" }}>Submit</Text>
          </TouchableOpacity>
         
         
     </View>

    

      </View>
      </ImageBackground>


        );
    }
    
    export default Fg;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
           backgroundColor: "#e0ffff",
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
            top: 100,
            // backgroundColor:"white",
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
          me: {
            color: "blue",
            paddingVertical: 5,
            justifyContent: "flex-end",
            padding: 226,
          },
          signup: {
            padding: 20,
            paddingHorizontal: 10,
          },
          sign:{
            color: "#8A39E1",
          },

          last:{
            flexDirection:"row",
            justifyContent:"space-between",
            
                 },


        });

