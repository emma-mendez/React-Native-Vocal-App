import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, SafeAreaView, Button, TouchableNativeFeedback, Alert } from 'react-native';



export default function App() {
console.log("Apped  Up & Running");


// const handlePress = 
// async () => {
//   const response = await fetch('https://fierce-peak-48968.herokuapp.com/login', {
//     method: 'POST',
//     headers: {
//       'Accept' : 'application/json',
//       'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//       userName: inputUserName,
//       password: inputUserPassword
//     })
//   })
//   const json = await response.json()
//   window.alert(json.message)
//   console.log(inputUserName)
//   console.log(inputUserPassword)

// console.log("Good to GO Emma!")


// if (json.message === 'user exists!') {
//   window.alert( "Welcome To ACS Vocal App. Accessing Servers ..." )
//   redirect()
// } else {
//    window.alert ("No User Identified. Please Register or retry with new details.") 
//   }  
// }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableNativeFeedback onPress={() => console.log('Touched')}>
      <Image 
      style={styles.logo}
      source={require('./assets/logo512.png')}/>
      </TouchableNativeFeedback>
       <Button 
        color='black'
        onPress={() => Alert.alert('No User Found, Please Contact Admin')}
        title= 'Log In'
        />
        <Button 
        color='black'
        onPress={() => Alert.alert('No User Found, Please Contact Admin')}
        title= 'Sign Up'
        />
      <StatusBar style="auto" />
    </SafeAreaView>
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
