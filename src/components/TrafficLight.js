import React, { Component } from 'react';
import './TrafficLight.scss';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
        console.log('rendering...', this.props.currentColor);
        return (
            <div className="traffic-light">
                <div className={`bulb bulb--red ${this.props.currentColor === RED ? 'active' : ''}`}></div>
                <div className={`bulb bulb--yellow ${this.props.currentColor === YELLOW ? 'active' : ''}`}></div>
                <div className={`bulb bulb--green ${this.props.currentColor === GREEN ? 'active' : ''}`}></div>
            </div>
        );
    }
}

export default TrafficLight;