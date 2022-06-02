import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const Succefull = (props) => {
  return (
    <View style={styles.Container}>

    <View style={styles.txt}>

    <Text style={{color:"black",marginTop:250,textAlign:"center",fontSize:25}}>Payment Succeffully</Text>
    
    {/* <Text style={{color:"white",marginTop:40,marginLeft:20,marginRight:20,fontSize:20}}>Online deposit has been initiated on your phone.
         Please follow instructions on the prompt to complete the deposit.
         If already done, Tap on the "Completed" buttom to confirm. </Text>     */}
    
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
    {/* <TouchableOpacity onPress={() => props.navigation.navigate("HomeList")}
                style={{
                    height: 50,
                    width:130,
                    backgroundColor: "red",
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:100,
                    marginLeft:15
                }}
            >
                <Text style={{ color: "white", fontSize: 20,}}>Cancel</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")}
                style={{
                    height: 50,
                    width:130,
                    backgroundColor: "black",
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:100,
                    marginLeft:120,
                    // marginRight:15
                }}
            >
                <Text style={{ color: "white", fontSize: 20,}}>Done</Text>
            </TouchableOpacity>
           
    </View>
    </View>
      
    </View>

  )
}

export default Succefull

const styles = StyleSheet.create({})