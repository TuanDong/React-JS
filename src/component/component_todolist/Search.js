import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:""
        }
    }
    Onchange = (event) =>{
        var value = event.target.value;
        this.setState({
            keyword:value
        });
    }
    Onsearch = () =>{
        this.props.onSearch(this.state.keyword);
    }
    render() {
        return (
            <div className="input-group">
                <input 
                    type="text" 
                    name="keyword" 
                    className="form-control" 
                    placeholder="Nhập từ khóa..." 
                    value={this.state.keyword}
                    onChange={this.Onchange}
                />
                <span className="input-group-btn" style={{ margin: 0, padding: 0 }}><button type="button" className="btn btn-primary" onClick={this.Onsearch}><i className="fas fa-search">&nbsp;</i>Tìm</button></span>
            </div>
        )
    }
}