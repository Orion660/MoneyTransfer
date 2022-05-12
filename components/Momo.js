// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput,} from 'react-native';
// import React from "react";
// import { AntDesign, MaterialIcons, Entypo, FontAwesome5, Ionicons, } from '@expo/vector-icons';
// import fo3 from '../assets/fo3.jpg';



// const Momo =(props)=>{
//     return(
// <ImageBackground source={fo3} style={styles.container}>

//         <View  style={styles.container}>
          

//             <View style={ styles.tap}>
//               <Text style={{paddingLeft: 10, top: 20, fontSize: 20,}}>Money should be registered in your name</Text>
//             </View>

//             <View style={styles.indx}>
//             <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
//            Mobile money name:
//            </Text>
//            <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
            


//            <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
//            Mobile money number:
//            </Text>
//            <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

//            <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
//            Network:
//            </Text>
//            <TextInput style={{fontSize: 15, marginVertical: 8, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
//             </View>



            

//              <View style={styles.outerContainer}>
//      <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Congract")}}>
//           <Text style={{ color: "white" }}>submit</Text>
//         </TouchableOpacity>
//         </View> 

         
//             </View>
//             </ImageBackground>

         


// );
// }

// export default Momo;

// const styles = StyleSheet.create({
// container: {
//   flex: 10,
// height: null,
//   width: null,
// },

// last:{
//     flexDirection:"row",
//     justifyContent:"space-between",
//     top:  480,
    
    
//          },

//          outerContainer:{
//             marginHorizontal: 50,
//             top: 80,
        
//           },
//           btn: {
//             padding: 16,
//             width: "100%",
//             borderRadius: 50,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#8A39E1",
//             top: 15,
//           },

//           tap:{
//             backgroundColor: "grey",
//             flex: 0.1,
//             top: 40,
//            },

           
//            indx:{
//             flex:0.3,
//             top: 80,
//              backgroundColor:"white",
             
//           },



// });


import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    SafeAreaView,
  } from "react-native";
  import React from "react";
  import { TouchableOpacity } from "react-native-gesture-handler";
  import { PayWithFlutterwave } from "flutterwave-react-native";
  import { Paystack,paystack } from "react-native-paystack-webview";
  
  
  const Momo =()=>{
    
    const transactionReference = (length) => {
      let arr =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(
          ""
        );
      let mainArr = [];
      for (let i = 0; i < length; i++) {
        let ranIndex = (Math.random() * (arr.length - 1)).toFixed(0);
        mainArr[i] = arr[ranIndex];
      }
      return mainArr.join("");
    };
  
    const options = {
      tx_ref: transactionReference(10),
      authorization: "FLWPUBK_TEST-5970fb37bd85eabb80618fc36a983934-X",
      customer: {
        email: "gabby@gmail.com",
      },
      amount: 1000,
      currency: "GHS",
      payment_options: "mobilemoneyghana",
    };
 const handleOnRedirect = (data) => {
     console.log(data);
 }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView >
         
          <View style={{ flex: 1, justifyContent: "space-around", padding: 10 }}>
            
            <View style={{ top: 10, }}>
              <Text style={{ color: "blue", fontSize: 20, fontWeight: "bold", }}>
                
              </Text>
              <Text
                style={{
                  color: "blue",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  paddingLeft: 110,
                }}
              >
                AyobaMoneyTransfer
              </Text>
            </View>
            {/* <Text
              style={{ color: "blue", fontSize: 20, fontWeight: "bold", top: 15 }}
            >
              About
            </Text> */}
            <Text
              style={{ color: "blue", fontSize: 18, top: 20, color: "white" }}
            >
              
            </Text>
          </View>
  
        
          <View style={{ padding: 25, alignItems: "center" }}>
            
            <PayWithFlutterwave
              onRedirect={(data) => handleOnRedirect(data)}
              options={options}
              customButton={(props) => (
                <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    backgroundColor: "#8A39E1",
                    width: 310,
                    height: 70,
                    borderRadius: 60,
                    alignItems: "center",
                  }}
                  onPress={props.onPress}
                  isBusy={props.isInitializing}
                  disabled={props.disabled}
                >
                  <Text style={{}}>Send Money To</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Momo;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e0ffff",
      padding: 20,
    },
    image: {
      flex: 1,
      position: "relative",
      justifyContent: "center",
      width: 380,
      height: 400,
      justifyContent: "center",
      opacity: 0.8,
    },
  })