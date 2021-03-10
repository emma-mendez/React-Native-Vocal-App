import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class WelcomeScreen extends Component {
  
  render(){
    
    return(
      <Container>
        <ImageBackground 
      style={styles.background}>
          <Image
          style={styles.logo}
          source={require("../assets/logo512.png")} />
          </ImageBackground>
          <Button enable block 
          style={styles.startButton}
            onPress= {() => {Actions.Menu2(); }}>
            <Text>Start</Text>
          </Button>
          <Button enable block
          style={styles.loginButton}
          onPress= {() => {Actions.Menu3(); }}>
            <Text>Login</Text>
          </Button>
          <Button enable block
          style={styles.registerButton}
            onPress= {() => {Actions.Menu2(); }}>
            <Text>Register</Text>
          </Button>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  registerButton: {
      height: 70,
      backgroundColor: 'orange',
      bottom: 70,
      borderRadius: 20,
  },
  loginButton: {
      height: 70,
      backgroundColor: 'orange',
      bottom: 90,
      borderRadius: 20,
  },
  startButton: {
      height: 70,
      backgroundColor: 'orange',
      bottom: 110,
      borderRadius: 20,

  },
  logo: {
      width: 200,
      height: 200,
      position: 'absolute',
      top: 70,
  },
  
})