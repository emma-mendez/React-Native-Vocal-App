import CountDown from "../components/Countdown";
import React, { Component } from 'react';

import {render} from "react-native-web";

export default class Meditation extends Component {

    render() {
        return (
            <CountDown
        size={50}
        until={20}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#1CC625'}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        separatorStyle={{color: '#1CC625'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
        )

    }
}