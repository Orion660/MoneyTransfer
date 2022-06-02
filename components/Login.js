import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity, } from 'react-native';
// import { color } from 'react-native-elements/dist/helpers';
import firebase from './database/firebase';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Dashboard')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}> 

<View style={{ alignItems: "center",
            justifyContent: "center",  flex: 0.4,}}>
            <Text style={{fontSize: 30, color: "#8A39E1",  }}>Cross-channel payments</Text>
            <Text style={{top: 5,}}>Simple. secure.fast and easy to use</Text>
            </View>


<Text>Email</Text>
         <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={
            (val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   


        <Text
          onPress={() => this.props.navigation.navigate("Fg")}>
          <Text style={styles.me}>Forget Password?</Text>
          </Text>       
         
        <Button        
          color="#8A39E1"
          title="Signin"
          onPress={() => this.userLogin()}
        />   
      
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>                          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#e0ffff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    color: "blue",
  },
  loginText: {
    color: '#8A39E1',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  me: {
    color: "blue",
    paddingVertical: 5,
    justifyContent: "flex-end",
    padding: 226,
  },
});
