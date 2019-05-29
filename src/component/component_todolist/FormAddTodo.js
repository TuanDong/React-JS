import React, { Component } from 'react'

export default class FormAddTodo extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            name:"",
            status:false
        }
    }
    componentWillMount(){
        var {task} =this.props;
        this.setState({
            id:task.id,
            name:task.name,
            status:task.status
        });
    }
    TurnOff=()=>{
        this.props.status();
    }
    Onchange = (event) =>{
        var target = event.target; 
        var name = target.name;
        var value = target.value==="true"?true:false;
        this.setState({
            [name] : value
        });
    }
    AddTodo = (e) =>{
        e.preventDefault();
        var item = this.state;
        this.props.addTodo(item);
    }
    
    render() {
        return (
            <div className="col-xs-4 col-sm-4col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Thêm cong việc
                            <span className="fas fa-times-circle text-right" onClick={()=>this.TurnOff()}></span>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.AddTodo}>
                            <div className="form-group">
                                <label>Tên : </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    className="form-control"
                                    value={this.state.name}
                                    onChange={this.Onchange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Trạng Thái : </label>

                                <select 
                                    name="status" 
                                    className="form-control" 
                                    value={this.state.status}
                                    onChange={this.Onchange}
                                >
                                    
                                    <option value={true}>Khích Hoạt</option>
                                    <option value={false}>Ẩn</option>
                                </select>

                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-warning"><i className="fas fa-plus">&nbsp;</i>Lưu Lại</button> &nbsp; &nbsp;
                                <button className="btn btn-danger" onClick={this.TurnOff}><i className="fas fa-times">&nbsp;</i>Hủy bỏ</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}