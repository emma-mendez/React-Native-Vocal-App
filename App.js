import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, SafeAreaView, Button, TouchableNativeFeedback, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
console.log("App  Up & Running");

  return (
    // <SafeAreaView style={styles.container}>
    //   <TouchableNativeFeedback onPress={() => console.log('Touched')}>
    //   <Image 
    //   style={styles.logo}
    //   source={require('./assets/logo512.png')}/>
    //   </TouchableNativeFeedback>
    //    <Button 
    //     color='black'
    //     onPress={() => Alert.alert("Restricted Access", "Please Contact Emma Mendez Administrator")}
    //     title= 'Log In'
    //     />
    //     <Button 
    //     color='black'
    //     onPress={() => Alert.alert("Restricted Access", "Please Contact Emma Mendez Administrator")}
    //     title= 'Sign Up'
    //     />
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <WelcomeScreen />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 296,
    height: 258,
    marginTop: -250,
  },


    
});
