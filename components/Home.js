import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo,FontAwesome5  } from '@expo/vector-icons';
import bck2 from '../assets/bck2.jpg';





const Home =(props)=>{
    return(
        <ImageBackground source={bck2} style={styles.container}>
        <View  style={styles.container}>
            <View style={styles.name}>
                <Text>
            <Image style= {styles.lov} source={require("../assets/L.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/O.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/A.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/N.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/H.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/I.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/P.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/P.jpg")}></Image>
            </Text>
            <Text>
            <Image style= {styles.lov} source={require("../assets/O.jpg")}></Image>
            </Text>
            </View>




            <View style={styles.contacts}>
            <Image style= {styles.hip} source={require("../assets/mc.jpg")}></Image>
            </View>

            <View style={styles.get}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("LoanHippo")}}>
                <Text style={{fontWeight:"bold", fontSize: 20, color: "black",}}>Apply Now </Text>
                {/* <Text>
                <AntDesign name="arrowright" size={24} color="white" />
                </Text> */}
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold", 
            top: 450,}}>
            <Text style={styles.round}></Text>
            </View>

            <View style={styles.last}>
             <Text style={{fontSize: 20, paddingLeft: 20,}}>LoanHippo</Text>
             <Text style={{paddingRight:20,}}><FontAwesome5 name="hippo" size={40} color="black" /></Text>
         </View>

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
            top: 450,
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
        




    })
    
      

