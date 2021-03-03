import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
    <ImageBackground 
      style={styles.background}>
          <Image
          style={styles.logo}
          source={require("../assets/logo512.png")} />
          <View style={styles.loginButton}></View>
          <View style={styles.registerButton}></View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'orange',
        bottom: 100,

    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'orange',
        bottom: 260,

        
    },
    logo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 70,



    },
})

export default WelcomeScreen;