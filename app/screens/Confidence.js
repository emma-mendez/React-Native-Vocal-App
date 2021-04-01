import React, { Component } from 'react';
import { Container, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { booleanMaskAsync } from '@tensorflow/tfjs';




export default class Page_4 extends Component {
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
          style={styles.quizButton}
            onPress= {() => {Actions.Record(); }}>
            <Text>Mood Today - Quiz</Text>
         </Button>
        <Button enable block
          style={styles.selfcareButton}
            onPress= {() => {Actions.Record(); }}>
            <Text>Self Care Session</Text>
         </Button>
          <Button enable block
          style={styles.toDoButton}
            onPress= {() => {Actions.ToDo(); }}>
            <Text>To Do List</Text>
         </Button>
         <Button enable block
          style={styles.closeButton}
            onPress= {() => {Actions.Page_3(); }}>
            <Text>Close</Text>
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
  quizButton: {
      margin: 40,
      height: 70,
      backgroundColor: 'orange',
      top: 161,
      borderRadius: 20,
  },
  selfcareButton: {
    margin: 40,
    height: 70,
    backgroundColor: 'orange',
    top: 110,
    borderRadius: 20,
  },
  toDoButton: {
    margin: 40,
      height: 70,
      backgroundColor: 'orange',
      top: 58,
      borderRadius: 20,

  },
  closeButton: {
    top: 3,
    margin: 40,
    height: 70,
    backgroundColor: 'grey',
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