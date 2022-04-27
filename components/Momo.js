import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Momo =(props)=>{
    return(
<ImageBackground source={fo3} style={styles.container}>

        <View  style={styles.container}>
            {/* <View style={{justifyContent:"flex-end", alignItems:"flex-end"}}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate("LoanHippo")}}>
            <Ionicons name="close-circle-sharp" size={40} color="black" />
            </TouchableOpacity>
            </View> */}

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
            </View>



            

             <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Congract")}}>
          <Text style={{ color: "white" }}>submit</Text>
        </TouchableOpacity>
        </View> 

         
            </View>
            </ImageBackground>

         


);
}

export default Momo;

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

          tap:{
            backgroundColor: "grey",
            flex: 0.1,
            top: 40,
           },

           
           indx:{
            flex:0.3,
            top: 80,
             backgroundColor:"white",
             
          },



});