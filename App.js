import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Menu from './app/screens/Menu';
import { Actions } from 'react-native-router-flux';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default class App extends Component {
  render() {
    console.log("App Up & Running");
    return (
      <Router hideNavBar= "true">
        <Scene key="Root" >
          <Scene key="Log In / Register" component={WelcomeScreen} title="Log in" initial={true}/>
          <Scene key="Menu" component={Menu} title="Menu" />
        </Scene>
      </Router>
    )
  }
}