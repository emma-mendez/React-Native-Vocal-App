import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Text } from 'native-base';

function WelcomeScreen() {
    return (
    <ImageBackground 
      style={styles.background}>
          <Image
          style={styles.logo}
          source={require("../assets/logo512.png")} />
          <View>
          <Button  disabled block
          style={styles.registerButton}>
              <Text>Login</Text>
          </Button>
          <Button disabled block 
          style={styles.loginButton}>
              <Text>Register</Text>
          </Button>
          </View>
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
        width: 200,
        height: 70,
        backgroundColor: 'orange',
        bottom: 260,
        borderRadius: 20,
    },
    registerButton: {
        // width: '100%',
        height: 70,
        backgroundColor: 'orange',
        bottom: 100,
        borderRadius: 20,
       
    },
    logo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 70,
    },
    
})

export default WelcomeScreen;