import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';



export default function App() {
console.log("Apped Up & Running");

  return (
    <View style={styles.container}>
      <Text>Log In</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
