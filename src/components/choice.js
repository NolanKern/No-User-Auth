import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Choice extends Component {
    handleChoice (){
        switch(this.value){
            case 'host':
                this.props.choice = this.value;
                break;
            case 'join':
                this.props.choice = this.value;
                break;
            default:
                console.log('error in choices');
        }
        console.log('In handleChoice');
    }

    render(){
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <button action='submit' className='btn btn-primary' value='host'>Host a Game!</button>
                <button action='submit' className='btn btn-primary' value='join'>Join a Game</button>
            </form>
        );
    }
}