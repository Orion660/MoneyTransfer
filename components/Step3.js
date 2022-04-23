import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, TextInput, Alert, ImageBackground,FlatList, ScrollView,  } from 'react-native';
import React,  {useState} from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons,  } from '@expo/vector-icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { TabRouter } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import bck2 from '../assets/bck2.jpg';


const Step3 =(props)=>{
 
    const [personal, setPersonal]= useState(false);
    const [business, setBusiness ]= useState(false);
    const [fees, setFees]= useState(false);
    const [medical, setMedical]= useState(false);
     const [tigocash, setTigocash]= useState(false);
    const [airtelcash, setAirtelcash]= useState(false);
     const [vodafonecash, setVodafonecash]= useState(false);
     const [mtncash, setMtncash]= useState(false);
      const [friend, setFriend]= useState(false);
      const [facebook, setFacebook]= useState(false);
      const [online, setOnline]= useState(false);
      const [radio, setRadio]= useState(false);
      const [billboard, setBillboard]= useState(false);
      const [trotro, setTrotro]= useState(false);
      const [newspaper, setNewspaper]= useState(false);
      const [instagram, setInstagram]= useState(false);
      const [other, setOther]= useState(false);
    



    const touch = [] 

    const Click = () =>{
  if(personal === true){
      touch.push("personal")
  }

  if(business === true){
    touch.push("business")
}

if(fees === true){
    touch.push("fees")
}

if(medical === true){
    touch.push("medical")
}


 if(tigocash === true){
        touch.push("tigocash")
}

 if(airtelcash === true){
     touch.push("airtelcash")
 }

 if(vodafonecash === true){
     touch.push("vodafonecash")
 }

 if(mtncash === true){
     touch.push("mtncash") }

if(three === true){
     touch.push("three")
 }

 if(friends === true){
    touch.push("friends")
 }

 if(facebook === true){
    touch.push("facebook")
 }

 if(online === true){
     touch.push("online")
 }

 if(radio === true){
    touch.push("radio")
}

if(billboard === true){
    touch.push("billboard")
}

if(trotro === true){
    touch.push("trotro")
}

if(newspaper === true){
    touch.push("newspaper")
}

if(instagram === true){
    touch.push("instagram")
}

if(other === true){
    touch.push("other")
}



Alert.alert ("touch","hello user","your touch are" + touch.toString())
}




    return(
      <ImageBackground source={bck2} style={styles.container}>
        <ScrollView  style={styles.container}>

<View style={styles.chart2}>
       <View style={styles.ID}>
         <Text style={styles.gender}>Account informatin(select one)</Text>
         <Text style={{paddingLeft: 10,top: 5,}}>for mobile money account,please be sure it is  </Text>
         <Text style={{paddingLeft: 8, top: 5,}}> solely in your name and active for at lest 2 month.</Text>
         <CheckBox 
         title="airtelcash" checked={airtelcash} checkcolor="green"
          onPress={() => setAirtelcash(!airtelcash)}
         /> 
<CheckBox 
         title="vodafonecash" checked={vodafonecash} checkcolor="green"
          onPress={() => setVodafonecash(!vodafonecash)}
         /> 
            <CheckBox 
         title="mtncash" checked={mtncash} checkcolor="green"
          onPress={() => setMtncash(!mtncash)}
         /> 

<CheckBox 
         title="tigocash" checked={tigocash} checkcolor="green"
          onPress={() => setTigocash(!tigocash)}
         /> 

           </View>
       </View> 

       
       <View style={styles.profileContainer}>
         
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Can you give more details(Optional):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           An amount requesting from loan hippo.(NB; make sure you read the term&coditions before requesting Max: 500 GHS):GHC
           </Text>
           <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
</View>

<View style={styles.chart2}>
       <View style={styles.ID}>
         <Text style={styles.gender2}>Why do you need a loan</Text>
         
           <CheckBox 
         title="personal" checked={personal} checkcolor="green"
          onPress={() => setPersonal(!personal)}
         />  
  <CheckBox 
         title="business" checked={business} checkcolor="green"
          onPress={() => setBusiness(!business)}
         />  
           <CheckBox 
         title="fees" checked={fees} checkcolor="green"
          onPress={() => setFees(!fees)}
         />  
           <CheckBox 
         title="medical" checked={medical} checkcolor="green"
          onPress={() => setMedical(!medical)}
         />  
           
</View>
 </View>




 <View style={styles.chart3}>
       <View style={styles.ID}>
         <Text style={styles.gender}>How did you hear about us</Text>
         <Text style={{paddingLeft: 10,top: 5,}}>Please select one of the following options. </Text>
         <CheckBox 
         title="friend" checked={friend} checkcolor="green"
          onPress={() => setFriend(!friend)}
         /> 
                  <CheckBox 
         title="facebook" checked={facebook} checkcolor="green"
          onPress={() => setFacebook(!facebook)}
         /> 
                  <CheckBox 
         title="online" checked={online} checkcolor="green"
          onPress={() => setOnline(!online)}
         /> 
                  <CheckBox 
         title="radio" checked={radio} checkcolor="green"
          onPress={() => setRadio(!radio)}
         /> 
                  <CheckBox 
         title="billboard" checked={billboard} checkcolor="green"
          onPress={() => setBillboard(!billboard)}
         /> 
                  <CheckBox 
         title="trotro" checked={trotro} checkcolor="green"
          onPress={() => setTrotro(!trotro)}
         /> 
                  <CheckBox 
         title="newspaper" checked={newspaper} checkcolor="green"
          onPress={() => setNewspaper(!newspaper)}
         /> 
                  <CheckBox 
         title="instagram" checked={instagram} checkcolor="green"
          onPress={() => setInstagram(!instagram)}
         /> 
                  <CheckBox 
         title="other" checked={other} checkcolor="green"
          onPress={() => setOther(!other)}
         /> 
         </View>
         </View>

         <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Congract")}}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
        </View>


       </ScrollView>
       </ImageBackground>
            );
        }
        
        export default Step3;
        
        const styles = StyleSheet.create({
            container: {
              flex: 10,
              // backgroundColor: "#F194FF",
              height: null,
              width: null,
            },

            gender2:{
                marginLeft: 10,
                marginStart: 20,
                marginTop:11,
                fontWeight: "bold",
               fontSize: 20,
              
               },
   
               ID:{
                   flexDirection: "column",
                   justifyContent: "space-around",
                   top: 5,
                  
               },
   
               chart2: {
                width: "90%",
                height: 320,
                backgroundColor: "#1273de",
                marginTop: 10,
                borderRadius: 50,
                marginLeft: 20,
                marginRight: 30,
               
            },

            gender:{
                marginLeft: 10,
                marginStart: 20,
                marginTop:  11,
                fontWeight: "bold",
               fontSize: 25,
              
               },

               chart3: {
                width: "90%",
                height: 580,
                backgroundColor: "#1273de",
                marginTop: 10,
                borderRadius: 50,
                marginLeft: 20,
                marginRight: 30,
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
                top: 15,
              },




        })