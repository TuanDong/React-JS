import React, { Component } from 'react'

export default class Reset extends Component {
    
    reset=()=>{
        this.props.reset();
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.reset}>Reset</button>
        )
    }
}