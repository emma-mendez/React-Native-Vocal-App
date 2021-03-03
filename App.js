import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, SafeAreaView, Button, TouchableNativeFeedback, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
console.log("App  Up & Running");

  return (
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
