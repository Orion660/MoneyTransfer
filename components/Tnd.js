import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';




const Tnd =(props)=>{
    return(
      <ImageBackground source={fo3} style={styles.container}>
        <View  style={styles.container}>
            <View style={{justifyContent:"flex-end", alignItems:"flex-end"}}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate("Home")}}>
            <Ionicons name="close-circle-sharp" size={40} color="black" />
            </TouchableOpacity>
            </View>
             <View style={{ alignItems: "center",
            justifyContent: "center",}}>
            <Text style={{fontSize: 40, color: "black",}}>Payment Initiated!</Text>
            </View>

            <View style={styles.iin}>
               <Text style={{paddingLeft: 140,}}>GHS 10.0</Text>
               <Text  style={{paddingLeft: 150,}}>
               <Ionicons name="md-person-outline" size={40} color="black" />
               </Text >
               <Text  style={{paddingLeft: 60,}}>Money send to 0271601775 free</Text>
               <Text style={{paddingLeft: 100,}}>charges GHS 0.00.</Text>
            </View>


            <View style={{justifyContent: "center", alignItems:"center",backgroundColor:"grey", top: 60,}}>
              <Text>THANK YOU</Text>
            </View>

            <View style={styles.contacts}>
            <Image style= {styles.hip} source={require("../assets/se1.jpg")}></Image>
            </View>

            {/* <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("MoneyTransfer")}}>
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
        </View>    */}



       



            </View>
            </ImageBackground>




            );
}

export default Tnd;

const styles = StyleSheet.create({
container: {
  flex: 10,
  // backgroundColor: "white",
  height: null,
  width: null,
},

iin:{
  width: "80%",
  borderRadius: 40,
  backgroundColor: "#00ffff",
  marginLeft: 40,
  flex: 0.2,
  flexDirection: "column",
  top: 30,
  justifyContent: "center"

},

hip: {
  width: 350,
  height:300,
},


contacts: {
   justifyContent: "center",
   alignItems: "center",
   fontSize: 20,
   fontWeight: "bold",
   top: 200,
   flex: 0.1,
},


outerContainer:{
    marginHorizontal: 50,

 },

 btn: {
   padding: 16,
   width: "100%",
   borderRadius: 50,
   alignItems: "center",
  justifyContent: "center",
    backgroundColor: "#8A39E1",
    top: 350,
 },
  



last:{
    flexDirection:"row",
    justifyContent:"space-between",
    top:  380,
    
    
         },




});
