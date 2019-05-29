import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
 
    changeFont(value){
        this.props.changeFontSize(value);
        
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.size}px</h3>
                </div>
                <div className="panel-body">

                    <button type="button" className="btn btn-success" onClick={()=>this.changeFont(2)}>Tăng</button> &nbsp;
                    <button type="button" className="btn btn-success" onClick={()=>this.changeFont(-2)}>Giảm</button>
                </div>
            </div>
        )
    }
}