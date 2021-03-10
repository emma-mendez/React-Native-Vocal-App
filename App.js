import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
// import WelcomeScreen from './app/screens/WelcomeScreen';
import Menu from './app/screens/Menu';
import Menu2 from './app/screens/Menu2';
import Menu3 from './app/screens/Menu3';


export default class App extends Component {
  
  render() {

    console.log("App Up & Running");
    return (
      <Router hideNavBar= "true">
        <Scene key="Root" >
          {/* <Scene key="Log In / Register" component={WelcomeScreen} title="Log in" initial={true}/> */}
          <Scene key="Menu" component={Menu} title="Menu" />
          <Scene key="Menu2" component={Menu2} title="Menu2" />
          <Scene key="Menu3" component={Menu3} title="Menu3" />

        </Scene>
      </Router>
    )
  }
}