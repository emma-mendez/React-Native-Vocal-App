import React, { Component, useRef } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Menu from './app/screens/Menu';
import Page_2 from './app/screens/Page_2';
import Page_3 from './app/screens/Page_3';
import Last from './app/screens/Last';
import Sing from './app/screens/Sing';
import Studio from './app/screens/Studio';
import Confidence from './app/screens/Confidence';
import Journal from './app/screens/Journal';
import Statistics from './app/screens/Statistics';
import Zing from './app/screens/Zing';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";

export default class App extends Component {
  
  render() {

    console.log("App Up & Running");
    return (
      <Router hideNavBar= "true">
        <Scene key="Root" >
          <Scene key="Welcome" component={Menu} title="Welcome" />
          <Scene key="Page_2" component={Page_2} title="Page 2" />
          <Scene key="Page_3" component={Page_3} title="Page 3" />
          <Scene key="Last" component={Last} title="Final Page" />
          <Scene key="Sing" component={Sing} title="Sing" />
          <Scene key="Studio" component={Studio} title="Studio" />
          <Scene key="Confidence" component={Confidence} title="Confidence" />
          <Scene key="Journal" component={Journal} title="Journal" />
          <Scene key="Statistics" component={Statistics} title="Statistics" />
          <Scene key="Zing" component={Zing} title="Zing" />
        </Scene>
      </Router>
    )
  }
}