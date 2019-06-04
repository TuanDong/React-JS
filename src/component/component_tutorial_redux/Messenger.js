import React, { Component } from 'react'

export default class Messenger extends Component {
    render() {
        var {menssenger} = this.props;
        return (
            <h3>
                <span style={{ backgroundColor: "yellow", fontSize: 16, fontWeight: "bold", padding: 5 }}>{menssenger}</span>
            </h3>
        );
    }
}