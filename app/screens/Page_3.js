import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem, Left, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';




export default class Page_3 extends Component {
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
          style={styles.singButton}
            onPress= {() => {Actions.Confidence(); }}>
            <Text>Confidence</Text>
         </Button>
        <Left>
         <Button enable block  
          style={styles.exitButton}
          onPress= {() => {Actions.Page_4();}}>
            <Text>Next</Text>
          </Button>
          </Left>
          <Right>
          <Button enable block  
          iconRight
          style={styles.nextButton}
          onPress= {() => {Actions.Page_2(); }}>
            <Text>Back</Text>
          </Button>
          </Right>
         <Button enable block 
          style={styles.studioButton}
          onPress= {() => {Actions.Journal(); }}>
            <Text>Journal / Lyrics</Text>
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
      top: 70,
      borderRadius: 20,
  },
  exitButton: {
    top: 70,
      margin: 10,
      height: 30,
      width: 70,
      backgroundColor: 'orange',
      bottom: 0,
      borderRadius: 20,
  },
  nextButton: {
    top: 10,
      margin: 10,
      height: 30,
      width: 70,
      backgroundColor: 'grey',
      bottom: 0,
      borderRadius: 20,

  },
  studioButton: {
    top: -50,
    margin: 40,
    height: 70,
    backgroundColor: 'orange',
    bottom: 0,
    borderRadius: 20,

},
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 10,
  },
  
})