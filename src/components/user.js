import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import Field from './userFacing/Field';
import ScoreBoard from './userFacing/scoreBoard';

export default class User extends React.Component {
    

    render(){
        <Field />
        <ScoreBoard />
    }
}