import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, FontAwesome,MaterialCommunityIcons,Ionicons, Feather, } from '@expo/vector-icons';
// import fo3 from '../assets/fo3.jpg';
import { ScrollView } from 'react-native';



const MoneyTransfer =(props)=>{
    return(
        
         <ImageBackground style={styles.container}>   
             {/* source={fo3} style={styles.container}> */}
        <ScrollView>
        <View  style={styles.container}>
            <View style={{flex:0.10,top: 40,}}>
        <View style= {styles.det}>
        <Image style= {styles.lov} source={require("../assets/sml2.jpg")}></Image>
            <Text style={{paddingLeft: 7,top: 4, fontWeight:"bold",}}>Welcome back</Text>
            <Text style={{paddingLeft: 150,}}>
            <AntDesign name="setting" size={24} color="grey" />
            </Text>
            </View>
         <View style= {styles.det2}>
            <Text style={{paddingLeft: 50,top: 0, color: "grey"}}>Lovina Afrifa</Text>
            </View>
        
            <View style={{top:20, paddingLeft:30, flexDirection:"row", flex: 0.10,}}>
            <Text style={{color:"grey"}}>MoneyTransfer:GHA-581313LA</Text>
            <View style={{width: "30%",borderRadius:15, flexDirection:"row", marginLeft:20, backgroundColor: "#8A39E1",}}>
                <Text style={{paddingLeft: 20,}}>share</Text>
                <Text style={{paddingLeft:20,}}>
                <AntDesign name="sharealt" size={15} color="white" />
                </Text>
            </View>
            </View>


<View style={{flexDirection:"row",justifyContent: "space-around", top: 50, }}>
    <Text>
    <TouchableOpacity onPress={()=>{props.navigation.navigate("RequestLoan")}}>
<FontAwesome name="plus-square" size={70} color="blue" />
</TouchableOpacity>
</Text>
<Text>
<TouchableOpacity onPress={()=>{props.navigation.navigate("Step3")}}>
<Ionicons name="ios-arrow-up-circle-sharp" size={70} color="red" />
</TouchableOpacity>
</Text>
<TouchableOpacity onPress={()=>{props.navigation.navigate("Payloan")}}>
<Text>
<Ionicons name="ios-arrow-down-circle-sharp" size={70} color="orange" />
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{props.navigation.navigate("Bills")}}>
<Text>
<FontAwesome5 name="money-bill-wave" size={70} color="green" />
</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:"row",justifyContent: "space-around", top: 50, }}>
    <Text style={{fontSize: 20,color:"grey"}}>Load</Text>
    <Text style={{fontSize: 20,color:"grey"}}>Send</Text>
    <Text style={{fontSize: 20,color:"grey"}}>Withdraw</Text>
    <Text style={{fontSize: 20, color:"grey"}}>Bills</Text>
</View>

<View style={{flexDirection:"row", top: 80, justifyContent:"space-around"}}>
    <Text style={{fontSize: 20,}}>History</Text>
    <View style={{flexDirection:"row",}}>
    <Text style={{fontSize: 20,}}>All transaction</Text>
    <Text>
    <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
    </Text>
    </View>
</View>

<View style={{justifyContent:"center", alignItems:"center",   top:200, backgroundColor:"white",}}>
    <Text style={{fontSize: 30,}}>No Transaction</Text>
</View>
<View style={{ backgroundColor: "#8A39E1", width: "90%", height: 80,  borderRadius:50, flexDirection:"column", marginLeft:20, marginRight: 50,  top:350,}}>
    <Text style={{paddingLeft: 52,top: 10, fontWeight:"bold", color:"white" , fontSize: 20}}>GHS 0.0</Text>
    <View style={{flexDirection:"row", justifyContent:"space-around"}}>
    <Text style={{top: 20, color: "white"}}>Ghanaian cedis</Text>
    <Image style= {styles.lov} source={require("../assets/gflag.png")}></Image>
    </View>
</View>

</View>


        



              </View>
              </ScrollView>
              </ImageBackground>
        );
    }
    
    export default MoneyTransfer;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
          height: null,
          width: null,
          backgroundColor: "#e0ffff",
        },

        det2: {
            flexDirection: "row",
            top: 5,
            paddingLeft: 30,
        },

        det: {
            flexDirection: "row",
            top: 20,
            paddingLeft: 20,
            flexDirection: "row",
             
        },

        lov:{
            height: 50,
             width: 50,
              borderRadius: 15 
        },







        })


