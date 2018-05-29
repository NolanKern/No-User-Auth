// This is where you create the field interface
import React from 'react';
// Will work on making this work
import Timer from '../hostFacing/timer';


export default class ScoreBoard extends React.Component {
    

    render(){
        // However you set up the Scoreboard layout
        let m = Timer.props.time.m;
        let s = Timer.props.time.s;

        
    }
}