import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView,} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
import fo3 from '../assets/fo3.jpg';



const Withdraw =(props)=>{
    return(
<ImageBackground source={fo3} style={styles.container}>
<ScrollView  style={styles.container}>

<View  style={styles.container}>

<View style={{ alignItems: "center",
            justifyContent: "center", flexDirection: "row", }}>
            <Text style={{fontSize: 40, color: "black", top: 40,}}>Withdraw Summary</Text>
            <Text style={{top: 40, paddingLeft: 20,}}>
            <TouchableOpacity  onPress={()=>{props.navigation.navigate("Home")}}>
            <Ionicons name="close-circle-sharp" size={40} color="black" />
            </TouchableOpacity>
            </Text>
            </View>
           <View style={ styles.all}>
            <View style={{justifyContent: "space-between", flexDirection: "row", borderBottomWidth:3,}}>
             <Text style={{paddingLeft: 10, fontSize: 20}}>Withdraw To</Text>
             <Text style={{paddingRight: 10, fontSize: 20}}>MobileWallet</Text>
            </View>

            <View style={{ justifyContent: "space-between", flexDirection: "row", borderBottomWidth:3,}}>
             <Text style={{paddingLeft: 10, fontSize: 20}}>Account Number</Text>
             <Text style={{paddingRight: 10,fontSize: 20}}>0200379176</Text>
            </View>

            <View style={{justifyContent: "space-between", flexDirection: "row", borderBottomWidth:3,}}>
             <Text style={{paddingLeft: 10,fontSize: 20}}>Amount To Send</Text>
             <Text style={{paddingRight: 10,fontSize: 20}}>GHS 10.0</Text>
            </View>

            <View style={{justifyContent: "space-between", flexDirection: "row", borderBottomWidth:3,}}>
             <Text style={{paddingLeft: 10,fontSize: 20}}>Recipient gest</Text>
             <Text style={{paddingRight: 10,fontSize: 20}}>GHS 10.0</Text>
            </View>

            <View style={{justifyContent: "space-between", flexDirection: "row", borderBottomWidth:3,}}>
             <Text style={{paddingLeft: 10,fontSize: 20}}>Fees</Text>
             <Text style={{paddingRight: 10,fontSize: 20}}>GHS 0.0</Text>
            </View>

            <View style={{top: 150, justifyContent:"center", alignItems:"center",  flex: 0.3,}}>
                <Text style={{fontSize: 20,}}>Transaction has been Successful</Text>
                <Text style={{top: 60,}}><Ionicons name="checkmark-circle-outline" size={100} color="green" /></Text>
            </View>





            </View>



</View>

</ScrollView>
</ImageBackground>




);
}

export default Withdraw;

const styles = StyleSheet.create({
container: {
flex: 10,
//   backgroundColor: "white",
height: null,
width: null,
},

all:{
top:50,
backgroundColor: "white",
flex: 0.4,
},









});