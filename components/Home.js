import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo,FontAwesome5  } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';





const Home =(props)=>{
    return(
        <ImageBackground source={fo3} style={styles.container}>
        <View  style={styles.container}>
            <View style={styles.name}>


            <Text style={{fontWeight:"bold", fontSize: 20, color: "black",}}>Ayoba Transfer</Text>
            </View>




            <View style={styles.contacts}>
            <Image style= {styles.hip} source={require("../assets/mt.jpg")}></Image>
            </View>

            <View style={styles.get}>
            <TouchableOpacity style={styles.btn1} onPress={()=>{props.navigation.navigate("Signup")}}>
                {/* <Text style={{fontWeight:"bold", fontSize: 20, color: "black",}}>Apply Now </Text> */}
                {/* <Text>
                <AntDesign name="arrowright" size={24} color="white" />
                </Text> */}
                 <Text style={{ color: "black" }}>i have an account</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.get1}>
            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Login")}}>
                {/* <Text style={{fontWeight:"bold", fontSize: 20, color: "black",}}>Apply Now </Text> */}
                {/* <Text>
                <AntDesign name="arrowright" size={24} color="white" />
                </Text> */}
                 <Text style={{ color: "white" }}>Open free account</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={{justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold", 
            top: 450,}}>
            <Text style={styles.round}></Text>
            </View> */}

            

        </View>
        </ImageBackground>
        );
    }
    
    export default Home;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
        //   backgroundColor: "#F194FF",
            height: null,
          width: null,
          


        },

        name: {
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            flexDirection: "row",
            flex: 0.1,
            top: 20,
    
        },

        lov:{
            height: 40,
             width: 40,
              borderRadius: 15 
        },

        hip: {
           width: 350,
           height:400,
        },


        contacts: {
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
            top: 230,
            flex: 0.1,
        },

        get: {
             justifyContent: "center",
              alignItems: "center",
            fontSize: 20,
            fontWeight: "bold", 
            top: 480,
            flexDirection: "row",
            
        },

        get1: {
            justifyContent: "center",
             alignItems: "center",
           fontSize: 20,
           fontWeight: "bold", 
           top: 350,
           flexDirection: "row",
           
       },

        round: {
            width: 180,
            height: 3,
            backgroundColor: "#0096FF",
             marginTop:10,
            borderRadius: 10,
            marginLeft: 20,
        },

        last:{
            flexDirection:"row",
            justifyContent:"space-between",
            top:  500,
            
            
                 },

                 btn: {
                    padding: 16,
                    width: "90%",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8A39E1",
                    top: 15,
                    marginLeft: 10,
                    marginRight: 10,
                  },
                  btn1: {
                    padding: 16,
                    width: "90%",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    top: 15,
                    marginLeft: 10,
                    marginRight: 10,
                  },
        




    })
    
      

