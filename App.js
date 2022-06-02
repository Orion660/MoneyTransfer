 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Dimensions,Modal,Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
 import MoneyTransfer from "./components/MoneyTransfer";
 import RequestLoan from "./components/RequestLoan";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Congract  from "./components/Congract";
import Tnd  from "./components/Tnd";
import Fg  from "./components/Fg";
import Payloan  from "./components/Payloan";
import Successful  from "./components/Successful";
import Momo  from "./components/Momo";
import Otp  from "./components/Otp";
import Withdraw from './components/Withdraw';
import Bills from './components/Bills';
import Dashboard from './components/dashboard';
import Bank from './components/Bank';
import PaymentDone from './components/PaymentDone';
import Succefull from './components/Succefull';




 




const Stack= createNativeStackNavigator();

const App = (props) => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
         <Stack.Screen name="MoneyTransfer" component={MoneyTransfer} options={{headerShown:false}} />
         <Stack.Screen name="RequestLoan" component={RequestLoan} options={{headerShown:false}}/>
         <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
         <Stack.Screen name="Step1" component={Step1} options={{headerShown:false}}/>
         <Stack.Screen name="Step2" component={Step2} options={{headerShown:false}}/>
         <Stack.Screen name="Step3" component={Step3} options={{headerShown:false}}/>
         <Stack.Screen name="Congract" component={Congract}options={{headerShown:false}} />
         <Stack.Screen name="Tnd" component={Tnd} options={{headerShown:false}}/>
         <Stack.Screen name="Fg" component={Fg} options={{headerShown:false}}/>
         <Stack.Screen name="Payloan" component={Payloan} options={{headerShown:false}}/>
         <Stack.Screen name="Successful" component={Successful} options={{headerShown:false}}/>
         <Stack.Screen name="Momo" component={Momo} options={{headerShown:false}}/>
         <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}}/>
         <Stack.Screen name="Withdraw" component={Withdraw} options={{headerShown:false}}/>
         <Stack.Screen name="Bills" component={Bills} options={{headerShown:false}}/>
         <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
         <Stack.Screen name="Bank" component={Bank} options={{headerShown:false}}/>
         <Stack.Screen name="PaymentDone" component={PaymentDone} options={{headerShown:false}}/>
         <Stack.Screen name="Succefull" component={Succefull} options={{headerShown:false}}/>


      
       </Stack.Navigator> 
    </NavigationContainer>

  
  
    
  );
};

export default App;
