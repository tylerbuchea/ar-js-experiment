import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import 'aframe';
/* import 'aframe-particle-system-component';
   import { Entity, Scene } from 'aframe-react'; */

import { Scene, Entity } from 'aframe-react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>

                    <a-anchor hit-testing-enabled="true">
                        <a-entity minecraft minecraft-head-anim="yes" minecraft-body-anim="hiwave" material='opacity: 0.5' />
                        <a-box position='0 0 0.5' material='opacity: 0.5;'></a-box>
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;