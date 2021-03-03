import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
    <ImageBackground 
      style={styles.background}
      source={require("../assets/logo512.png")}>
          <View style={styles.loginButton}></View>
          <View style={styles.registerButton}></View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'orange'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'orange'
        
    }
})

export default WelcomeScreen;