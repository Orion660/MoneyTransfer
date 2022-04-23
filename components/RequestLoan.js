import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,SafeAreaView,Button, Pressable, TouchableOpacity, Image, ImageBackground,Modal,  Alert, } from 'react-native';
import React, {useState} from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5,  } from '@expo/vector-icons';
import bck2 from '../assets/bck2.jpg';








const RequestLoan =(props)=>{
  const [modalVisible, setModalVisible] = useState(false);
    return(
      <ImageBackground source={bck2} style={styles.container}>
        <View  style={styles.container}>
            <View style={styles.Request}>
                <Text style={{ fontSize: 40, fontWeight: "bold", paddingLeft: 50, top: 10, color: "#8A39E1",}}>REQUEST-LOAN</Text> 

                 {/* <Text style={{paddingRight:20, top: 10,}}><FontAwesome5 name="hippo" size={40} color="black" /></Text>  */}
            </View>

            <View style={styles.amount}>
            <Text style={{paddingLeft: 50,  fontSize: 15,}}>Fast Loan You can Request An Amount From </Text> 
            <Text  style={{paddingLeft: 2, fontSize: 15,}}>GHC 50 , GHC 100, GHC 150, GHC 200, GHC 250, GHC 300</Text>
            <Text  style={{paddingLeft: 50, fontSize: 15,}}>  GHC 350, GHC 400, GHC 450, AND GHC 500 .</Text>
            </View>

         
            <View style={styles.terms}>
            <Modal  animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={{paddingLeft: 10, fontSize: 20, top: 5, marginBottom: 15,
    textAlign: "center"}}>There is a 30days for you to pay back your loan Thank you .</Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Long Terms</Text>
        <Text style={{color:"orange",paddingLeft: 70,}}>Touch Me</Text>
      </Pressable>
    </View>       
        
         <View>

         </View>

         <View style={styles.pic}>
         <Image style= {styles.lov} source={require("../assets/hippo.jpg")}></Image>
         </View>

         <View style={styles.signin}>
         <TouchableOpacity onPress={()=>{props.navigation.navigate("Signup")}}>
          <Text style={{ paddingTop: 15, fontSize: 20, color: "white", justifyContent: "center", 
          alignItems: "center", paddingLeft: 70, }}>SIGN UP</Text>
            </TouchableOpacity>
         </View>

           </View> 
           </ImageBackground>
        );
    }
    
    export default RequestLoan;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
          // backgroundColor: "#F194FF",
          height: null,
          width: null,
        },

        Request:{
            flexDirection:"row",
            justifyContent:"space-between",
            top: 10,
                 },

                 amount:{
                    flexDirection: "column",
                    justifyContent:"space-between",
                    top: 30,
                         },
        amt:{
            top: 30,
            flex: 0.2,
            // backgroundColor: "black"
        },

        // terms:{
        //     width: "50%",
        //     height: 50,
        //     backgroundColor: "blue",
        //     marginLeft: 20,
        //     marginTop: 40,
        //     borderRadius: 50, 
        // },

        modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 20,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        },
        button: {
          borderRadius: 20,
          padding: 8,
          elevation: 2
        },

        buttonOpen: {
          backgroundColor: "#D5E986",
          marginLeft: 100,
           marginTop: 40,
           width: "50%",
          height: 50,
        },
        buttonClose: {
          backgroundColor: "#2196f3",
          width: "80%",
          
          
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        modalText: {
          marginBottom: 15,
          textAlign: "center"
        },

        centeredView: {
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
          
        },

        lov:{
          height: 300,
           width: 300,
            borderRadius: 250, 
      },
      
      pic: {
 justifyContent:"center",
 alignItems:"center",
 top: 30,
      },
      signin:{
        // justifyContent:"center",
        // alignItems:"center",
        marginTop: 90,
        height: 50,
           width: "50%",
            borderRadius: 22, backgroundColor: "#8A39E1",
            marginLeft: 100,
            top: 50,
      },

     
       

            

            



    })
      