import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import ScoreChange as Score from './hostFacing/scoreChange';
import PossesionChange as Change from './hostFacing/possessionChange';
import Slider from './hostFacing/slider';
import Timer as Time from './hostFacing/timer';

export default class host extends React.Component {
    handleSubmit = e => {
        // checks to see if the room with that code already exists. If it doesnt then create the room with the given id
        if( !((this.props.rooms).indexOf(this.props.roomName)>-1)){
            this.setState({
                // how to update rooms array from here

            })
        }
        else{
            // Need to send an error message to tell the user to choose a different name for the room
            // 
            // this is a prototype
            this.setState({
                message: 'This room name has been taken please enter a different name'
            })
        }
    };

    render(){
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
                <label>Please Enter A Room Name:</label>
                <input {...roomName} className="form-control" />
            </fieldset>
            <button action="submit" className="btn btn-primary">Confirm</button>
        </form>
        // ask about toggling the following code
        <Score />

        // Should I bundle this functionality together or bind the image to the slider bar?
        <Change />
        <Slider />

        // Game Time here
        <Time />
    }
}