// import {StyleSheet,Text,View,ScrollView,ImageBackground,SafeAreaView,} from "react-native";
//   import React from "react";
//   import  PaystackWebView from "react-native-paystack-webview";

    
//     const Bank=() => {
//             return (
//                   <View style={styles.container}>
//                       <PaystackWebView
//                       buttonText="Pay Now"
//                        ShowPayButton={true}
//                       paystackKey="pk_live_44df272014a2ea1ab965d10278128c330b3425ee"
//                       paystackSecretKey="sk_live_d7cedfb8a8aa2ac4f68ba6c19c4531b048f72a9b"
//                       amount={12000}
//                       billingEmail="lovinaafrifa223344@gmail.com"
//                       biliName="Lovina"
//                       billingMobile="0271601775"
//                       ActivityIndicatiorColor="green"
//                       SafeAreaViewContainer={{marginTop: 5}}
//                       SafeAreaViewContainerModal={{marginTop: 5}}
//                       oncancle={(e) => {
                        
//                       }}
//                       onSuccess={(e) => {
                      
//                     }}
//                     autoStart={false}
//                     />
//               </View>
//             );
      
//   }



// export default Bank;


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//        backgroundColor: "#e0ffff",
//       justifyContent:"center",
//       alignItems:"center",
//     },
  
// })



import React, { useRef } from 'react';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import { View, TouchableOpacity,Text,StyleSheet, } from 'react-native';

function Bank(){
  const paystackWebViewRef = useRef(paystackProps.PayStackRef); 

  return (
    <View style={styles.container}>
      <Paystack
        paystackKey="pk_live_44df272014a2ea1ab965d10278128c330b3425ee"
        paystackSecretKey="sk_live_d7cedfb8a8aa2ac4f68ba6c19c4531b048f72a9b"
        billingEmail="lovinaafrifa223344@gmail.com"
        biliName="Lovina"
        billingMobile="0271601775"
        ActivityIndicatiorColor="green"
       SafeAreaViewContainer={{marginTop: 5}}
      SafeAreaViewContainerModal={{marginTop: 5}}
      channel= "card"
      currency="GHS"
      amount= "1000"
      display_name="Mobile Number"
      variable_name= "mobile_number"
      value= "+2330271601775"
      referrer="http://localhost:3001/integration/microphone.html?"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        ref={paystackWebViewRef}
        autoStart={false}

      />

        <TouchableOpacity style={{justifyContent:"center", alignItems: "center", top: 50,
      backgroundColor: "#8A39E1", width: "90%", height: 80,  borderRadius:50, flexDirection:"column",marginLeft: 20, }} onPress={()=> paystackWebViewRef.current.startTransaction()}>
          <Text style={{fontSize: 20,}}>Send To</Text>
        </TouchableOpacity>
      </View>
  );
}

export default Bank;
    
const styles = StyleSheet.create({
    container: {
      flex: 10,
       backgroundColor: "#e0ffff",
      height: null,
      width: null,
    },
  })
  
  