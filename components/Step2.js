import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, TextInput, Alert, ImageBackground,FlatList, ScrollView,  } from 'react-native';
// import React,  from 'react';
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons,  } from '@expo/vector-icons';
// import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
// import { TabRouter } from '@react-navigation/native';
// import { CheckBox } from 'react-native-elements';
import fo3 from '../assets/fo3.jpg';
import React from "react";





const Step2 =(props)=>{
 

    return(
      <ImageBackground source={fo3} style={styles.container}>
        <ScrollView  style={styles.container}>

        <View style={{ alignItems: "center", flexDirection:"row", backgroundColor: "grey",
            justifyContent: "center", top: 20, flex: 0.2}}>
            <Text style={{fontSize: 20, color: "black", }}>A load from Fund source: </Text>
            <Text>
              <Image style= {styles.lov} source={require("../assets/vodafone.jpg")}></Image>
              </Text>
            </View>

            <View style={styles.indx}>
            <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Fundsource(Phonenumber):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
            


           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Am amount to Load (GHS):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
            </View>


          <View style={{top: 80, paddingLeft: 20,}}>  
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
          
          <View style={{backgroundColor: "white",}}>
           <Text style={{ top: 20,color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Enter vodaphone voucher:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 20, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
           </View>
           </View> 









             <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("MoneyTransfer")}}>
          <Text style={{ color: "white" }}>LOAD</Text>
        </TouchableOpacity>
        </View>  
            </ScrollView>
            </ImageBackground>
            );
        }
        
        export default Step2;
        
        const styles = StyleSheet.create({
            container: {
              flex: 10,
              // 
              height: null,
              width: null,
              backgroundColor:"#e0ffff",
            },

            lov:{
              height: 50,
               width: 50,
                borderRadius: 15, 
              
            },

            indx:{
              flex:0.3,
              top: 40,
               backgroundColor:"white",
               
            },
            



                     outerContainer:{
                       flex:20,
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
                       
        
        


    })
              