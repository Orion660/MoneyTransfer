import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Bills =(props)=>{
    return(
<ImageBackground source={fo3} style={styles.container}>
<ScrollView  style={styles.container}>

<View  style={styles.container}>


<View style={{ alignItems: "center",
            justifyContent: "space-around", flexDirection: "row", }}>
            <Text style={{fontSize: 40, color: "black", top: 40,}}>Bills</Text>
            <Text style={{top: 40, paddingLeft: 20,}}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate("MoneyTransfer")}}>
            <Ionicons name="close-circle-sharp" size={40} color="black" />
            </TouchableOpacity>
            </Text>
            </View>


<View style={{top: 300, justifyContent:"center", flexDirection:"row-reverse",}}>
  <Text>This feature is currently not unavailable</Text>
</View>

</View>

</ScrollView>
</ImageBackground>




);
}

export default Bills;

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



  