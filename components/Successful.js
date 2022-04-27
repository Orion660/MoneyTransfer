import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Successful =(props)=>{
    return(
<ImageBackground source={fo3} style={styles.container}>

        <View  style={styles.container}>
           
             <View style={{ alignItems: "center",
            justifyContent: "center",}}>
            <Text style={{fontSize: 40, color: "black", top: 40,}}>Withdraw</Text>
            </View>


            <View style={styles.in}>
<Text style={{top: 3, marginLeft: 90,}}>
              <Image style= {styles.lov} source={require("../assets/gflag.png")}></Image>
              </Text>
              <Text style={{top:15,paddingLeft: 80,}}>(GHS):10.0</Text>
              <View style={{paddingLeft: 20,}}>
  <Text style={{top: 20, fontSize: 15,  }}>An amount in your Ayoba wallet</Text>
  </View>
</View>




<View style={ styles.tap}>
              <Text style={{paddingLeft: 10, top: 20, fontSize: 20,}}>Money should be registered in your name</Text>
            </View>

            <View style={styles.indx}>
            <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Mobile money name:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
            


           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Mobile money number:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Network:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

          
           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Withdraw amount(GHS):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>



            </View>






         

            

             <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Otp")}}>
          <Text style={{ color: "white" }}>Add Mobile Money</Text>
        </TouchableOpacity>
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
            flex:0.2,
            marginHorizontal: 50,
            top: 80,
        
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

          in:{
            width: "60%",
            borderRadius: 40,
            backgroundColor: "white",
            marginLeft: 80,
            flex: 0.2,
            flexDirection: "column",
            top: 40,
            justifyContent: "center",
  
          },

          lov:{
            height: 50,
             width: 50,
              borderRadius: 15, 
              
              
            
          },

          tap:{
            backgroundColor: "grey",
            flex: 0.1,
            top: 80,
           },

           
           indx:{
            flex:0.4,
            top: 80,
             backgroundColor:"white",
             
          },




});
