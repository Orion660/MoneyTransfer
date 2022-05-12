import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Otp =(props)=>{
    return(
<ImageBackground source={fo3} style={styles.container}>
<ScrollView  style={styles.container}>

<View  style={styles.container}>
<View style={styles.indx}>
            <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           OTP Code:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 12, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
            </View>

            <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Withdraw")}}>
          <Text style={{ color: "white" }}>submit</Text>
        </TouchableOpacity>
        </View> 


</View>

</ScrollView>
</ImageBackground>




);
}

export default Otp;

const styles = StyleSheet.create({
container: {
flex: 10,
  backgroundColor: "#e0ffff",
height: null,
width: null,
},



   indx:{
    flex:0.3,
    top: 80,
     backgroundColor:"white",
     
  },


  outerContainer:{
    flex:0.2,
    marginHorizontal: 50,
    top: 100,

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


});