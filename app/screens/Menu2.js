import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';




export default class pageTwo extends Component {
  render(){
    return(
      <Container>
        <Header>
          
        </Header>
          <Button enable block 
          style={styles.singButton}
            onPress= {() => {Actions.pop(); }}>
            <Text>Sing</Text>
         </Button>
         <Button enable block 
          style={styles.exitButton}
          onPress= {() => {Actions.pop(); }}>
            <Text>Exit</Text>
          </Button>
          <Button enable block 
          style={styles.nextButton}
          onPress= {() => {Actions.Menu3(); }}>
            <Text>Next</Text>
          </Button>
         <Button enable block 
          style={styles.studioButton}
          onPress= {() => {Actions.Menu(); }}>
            <Text>Studio</Text>
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
  singButton: {
      margin: 40,
      height: 70,
      backgroundColor: 'orange',
      bottom: 0,
      borderRadius: 20,
  },
  exitButton: {
      margin: 10,
      height: 30,
      width: 100,
      backgroundColor: 'orange',
      bottom: 0,
      borderRadius: 20,
  },
  nextButton: {
      margin: 10,
      height: 30,
      width: 100,
      backgroundColor: 'orange',
      bottom: 0,
      borderRadius: 20,

  },
  studioButton: {
    margin: 40,
    height: 70,
    backgroundColor: 'orange',
    bottom: 0,
    borderRadius: 20,

},
  logo: {
      width: 200,
      height: 200,
      position: 'absolute',
      top: 70,
  },
  
})