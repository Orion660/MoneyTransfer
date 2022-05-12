import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Congract =(props)=>{
    return(
<ImageBackground source={fo3} style={styles.container}>
<ScrollView  style={styles.container}>

<View  style={styles.container}>

<View style={{ alignItems: "center", flexDirection:"row", backgroundColor: "#8A39E1",
            justifyContent: "center", top: 20, flex: 0.1}}>
            <Text style={{fontSize: 20, color: "black", }}>Send To </Text>
            </View>

            {/* <View style={{backgroundColor: "white",top: 20,}}>
           <Text>
           <Image style= {styles.lov} source={require("../assets/vodafone.jpg")}></Image>
           <Text>fgghhjj</Text>
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 20, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
           </View> */}

            

<View style={styles.in}>
<Text style={{top: 5,}}>
              <Image style= {styles.lov} source={require("../assets/gflag.png")}></Image>
              </Text>
              <Text style={{top:20,}}>(GHS):</Text>
<TextInput style={{borderWidth:0,backgroundColor:"#fff",fontSize:20,marginVertical:15}} placeholder=' 1)Amount sending(GHS):'/>
  <Text></Text>
</View>

<View style={{top: 60,}}>
<Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Send To (Phonenumber):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 14, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
</View>

<View style={styles.iin}>
<Text style={{ paddingLeft: 20,}}>Minimum amount: GHS 1.00</Text>
<Text style={{top: 1, paddingLeft: 20,}}>Maximum amount GHS: 5,000.00</Text>
</View>
      

<View style={{top: 100, paddingLeft: 20,}}>  
            <Text>
              PLease follow these instruction to finalise your payment.
            </Text>
            <Text>1. Dial *110#</Text>
            <Text>2. Select 4 -make payment</Text>
            <Text>3. Select 4 ti generate voucher</Text>
            <Text>4. enter pin</Text>
            <Text>5.Receive voucher from from sms</Text>
            <Text>6.enter pin</Text>
            <Text>7.enter the vodafone generate voucher code in the filed above</Text>
          
          <View style={{backgroundColor: "white",top: 20,}}>
           <Text style={{ top: 20,color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Enter voucher code:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 20, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
           </View>
           </View> 

              <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Tnd")}}>
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
        </View>   


            </View>

            </ScrollView>
            </ImageBackground>

         


);
}

export default Congract;

const styles = StyleSheet.create({
container: {
  flex: 10,
 backgroundColor: "#e0ffff",
height: null,
  width: null,
},

last:{
    flexDirection:"row",
    justifyContent:"space-between",
    top:  480,
    
    
         },

         lov:{
          height: 50,
           width: 50,
            borderRadius: 15, 
            
          
        },

        in:{
          width: "80%",
          borderRadius: 40,
          backgroundColor: "white",
          marginLeft: 40,
          flex: 0.2,
          flexDirection: "row",
          top: 40,
          justifyContent: "center"

        },

        iin:{
          width: "80%",
          borderRadius: 40,
          backgroundColor: "#00ffff",
          marginLeft: 40,
          flex: 0.2,
          flexDirection: "column",
          top: 60,
          justifyContent: "center"

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
            top: 150,
         },
          





});









