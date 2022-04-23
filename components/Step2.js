import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, TextInput, Alert, ImageBackground,FlatList, ScrollView,  } from 'react-native';
import React,  {useState} from "react";
import { AntDesign, MaterialIcons, Entypo, FontAwesome5, MaterialCommunityIcons,  } from '@expo/vector-icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { TabRouter } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import bck2 from '../assets/bck2.jpg';






const Step2 =(props)=>{
 
    const [single, setSingle]= useState(false);
    const [married, setMarried ]= useState(false);
    const [divorced, setDivorced]= useState(false);
    const [widowed, setWidowed]= useState(false);
    const [no, setNo]= useState(false);
    const [yes, setYes]= useState(false);
    const [zero, setZero]= useState(false);
    const [one, setOne]= useState(false);
    const [two, setTwo]= useState(false);
    const [three, setThree]= useState(false);
    const [fulltimework, setFulltimework]= useState(false);
    const [unemployed, setUnemployed]= useState(false);






    const touch = [] 

    const Click = () =>{
  if(single === true){
      touch.push("single")
  }

  if(married === true){
    touch.push("married")
}

if(divorced === true){
    touch.push("divorced")
}

if(widowed === true){
    touch.push("widowed")
}

if(no === true){
    touch.push("no")
}

if(yes === true){
    touch.push("yes")
}

if(zero === true){
    touch.push("zero")
}

if(one === true){
    touch.push("one")
}

if(two === true){
    touch.push("two")
}

if(three === true){
    touch.push("three")
}

if(fulltimework === true){
    touch.push("fulltimework")
}

if(unemployed === true){
    touch.push("unemployed")
}


Alert.alert ("touch","hello user","your touch are" + touch.toString())
}


    return(
      <ImageBackground source={bck2} style={styles.container}>
        <ScrollView  style={styles.container}>

<View style={styles.chart2}>
       <View style={styles.ID}>
         <Text style={styles.gender2}>Marital Status</Text>
           <CheckBox 
         title="single" checked={single} checkcolor="green"
          onPress={() => setSingle(!single)}
         />  
  <CheckBox 
         title="married" checked={married} checkcolor="green"
          onPress={() => setMarried(!married)}
         />  
           <CheckBox 
         title="divorced" checked={divorced} checkcolor="green"
          onPress={() => setDivorced(!divorced)}
         />  
           <CheckBox 
         title="widowed" checked={widowed} checkcolor="green"
          onPress={() => setWidowed(!widowed)}
         /> 
           </View>
       </View> 


<View style={styles.chart}>
       <View style={styles.smallcontainer}>
         <Text style={styles.gender}>Are you in school</Text>
           <CheckBox 
         title="no" checked={no} checkcolor="green"
          onPress={() => setNo(!no)}
         />  
           <CheckBox 
         title="yes" checked={yes} checkcolor="green"
          onPress={() => setYes(!yes)}
         />  
         </View>
       </View>

       <View style={styles.chart2}>
       <View style={styles.ID}>
         <Text style={styles.gender2}>Marital Status</Text>
           <CheckBox 
         title="zero" checked={zero} checkcolor="green"
          onPress={() => setZero(!zero)}
         /> 
<CheckBox 
         title="one" checked={one} checkcolor="green"
          onPress={() => setOne(!one)}
         /> 
            <CheckBox 
         title="two" checked={two} checkcolor="green"
          onPress={() => setTwo(!two)}
         /> 
            <CheckBox 
         title="three" checked={three} checkcolor="green"
          onPress={() => setThree(!three)}
         />
</View>
 </View>

 <View style={styles.profileContainer}>
         
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Location:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Postal address (Optional):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Street address or landmark:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Total Monthly income:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Who owns the house or building Where you lives:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           How long have you lived there:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>
           </View>

           <View style={styles.chart2}>
       <View style={styles.ID}>
         <Text style={styles.gender2}>Main source of income</Text>
         <Text style={{paddingLeft: 10,}}>Describe your main job. if you have more than one job,describe the one that gives you more icome</Text>
           <CheckBox 
         title="fulltimework" checked={fulltimework} checkcolor="green"
          onPress={() => setFulltimework(!fulltimework)}
         />  
  <CheckBox 
         title="unemployed" checked={unemployed} checkcolor="green"
          onPress={() => setUnemployed(!unemployed)}
         />  
         </View>
         </View>

         <View style={styles.profileContainer}>
         
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Industry:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           what do you do there (Industry):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           How long have you worked there:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Other source of income(Optional):
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Reference contact phone number 1:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Contact name of reference:</Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Reference contact phone number 2:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Contact name of reference:</Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2, marginRight: 20, marginLeft: 20,}}>
           Reference contact phone number 3:
           </Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2 ,marginRight: 20, marginLeft: 20,}}>
           Contact name of reference:</Text>
           <TextInput style={{fontSize: 15, marginVertical: 2, borderBottomWidth: 1, marginRight: 20, marginLeft: 20,}}/>

           </View>


           <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Step3")}}>
          <Text style={{ color: "white" }}>Continue</Text>
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
            },

            gender2:{
                marginLeft: 10,
                marginStart: 20,
                paddingTop:11,
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
                height: 220,
                backgroundColor: "#1273de",
                marginTop: 10,
                borderRadius: 50,
                marginLeft: 20,
            },

            smallcontainer:{
                flexDirection: "row",
                justifyContent: "space-around",
                // backgroundColor: "blue",
            },
        
            chart: {
                    width: "90%",
                    height: 50,
                    backgroundColor: "#1273de",
                    marginTop: 10,
                    borderRadius: 50,
                },
        
                 gender:{
                     marginLeft: 10,
                     marginStart: 20,
                     paddingTop:11,
                     fontWeight: "bold",
                    fontSize: 20,
                   
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
              