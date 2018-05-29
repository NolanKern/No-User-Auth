import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import classnames from 'classnames';


// should this call the css code and invert the direction? if so how?

export default class changeDir extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        var classes = classnames(
            'FootballDir',
            {'FootballDir--home': this.props.dir},
            {'FootballDir--away':this.props.dir}
        )
        var direction = this.props.dir ? 'home' : 'away';
    }

    render(){
        
        <button onClick={this.handleClick}>Change Possesion</button>
    }
}
