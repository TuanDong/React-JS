import React, { Component } from 'react'

export default class PickerColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : ['red','green','blue','#ccc'] 
        }
    }
    showcolor(color){
        return {
            backgroundColor: color
        };

    }
    changecolor(color){
        this.props.ChangeColor(color);
    }
    render() {
        var eleColor = this.state.colors.map((color,index)=>{
            return (
                <span key={index} style={this.showcolor(color)} className={color===this.props.color?"activestyle":""} onClick={()=>this.changecolor(color)}></span>
            );
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color picker</h3>
                    </div>
                    <div className="panel-body">
                    {eleColor}
                    </div>
                </div>

            </div>
        )
    }
}