import React, { Component } from 'react'
import PickerColor from './component/component_src_color/PickerColor'
import ChangeFontSize from './component/component_src_color/ChangeFontSize'
import Reset from './component/component_src_color/Reset'
import Result from './component/component_src_color/Result'
import './Tutorial.css';


export default class TutorialStateProps extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color:'red',
            fontsize:12,
        }
        this.changeFontSize = this.changeFontSize.bind(this);
    }
    ChangeColor=(color)=>{// es6 ko can bind
        this.setState({
            color:color
        });
    }
    changeFontSize(value){
        let fontsize = this.state.fontsize +value;
        if(fontsize>=12 && fontsize<=30){
            this.setState({
                fontsize:fontsize
            });
        }else{
            alert("font chữ bạn khích thước phải lớn hơn 12 và nhỏ hơn 30");
        }
        
    }
    reset=()=>{
        this.setState({
            color:'red',
            fontsize:12,
        });
    }
    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    
                    <PickerColor color = {this.state.color} ChangeColor = {this.ChangeColor}/>
                    
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                        <ChangeFontSize size = {this.state.fontsize} changeFontSize={this.changeFontSize}/>
                        
                        <Reset reset = {this.reset}/>
                        
                    </div>
                    <Result color = {this.state.color} size = {this.state.fontsize}/>
                    
                </div>
            </div>
        )
    }
}