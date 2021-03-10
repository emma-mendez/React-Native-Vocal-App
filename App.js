import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Menu from './app/screens/Menu';
import Page_2 from './app/screens/Page_2';
import Page_3 from './app/screens/Page_3';
import Last from './app/screens/Last';

export default class App extends Component {
  
  render() {

    console.log("App Up & Running");
    return (
      <Router hideNavBar= "true">
        <Scene key="Root" >
          <Scene key="lastWelcome" component={Menu} title="Welcome" />
          <Scene key="Page_2" component={Page_2} title="Page 2" />
          <Scene key="Page_3" component={Page_3} title="Page 3" />
          <Scene key="Last" component={Last} title="Final Page" />
        </Scene>
      </Router>
    )
  }
}