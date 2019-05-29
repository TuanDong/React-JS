import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textSearch:"",
            select:""
        }
    }
    DeleteItem=(id)=>{
        this.props.deleteitem(id);
    }
    ChangeStatus=(id)=>{
        this.props.changeStatus(id);
    }
    UpdateItem=(id)=>{
        this.props.updateItem(id);
    }
    OnChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.props.onchange(name === "textSearch"?value:this.state.textSearch,name === "select"?value:this.state.select);
        this.setState({
            [name]:value
        });
    }
    render() {
        var eleItem = this.props.task.map((item,index)=>{
            return(
                <TaskItem 
                    key={index} 
                    item={item} 
                    index={index}
                    deleteItem= {this.DeleteItem} 
                    changeStatus ={this.ChangeStatus} 
                    updateItem={this.UpdateItem}
                />
            );
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="textSearch"
                                value={this.state.textSearch}
                                onChange={this.OnChange}
                            />
                        </td>
                        <td>
                            <select 
                                className="form-control"
                                name="select"
                                value={this.state.select}
                                onChange={this.OnChange}
                            >
                                <option value="0">Tất Cả</option>
                                <option value="1">Kích Hoạt</option>
                                <option value="2">Ẩn</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {eleItem}
                </tbody>
            </table>

        )
    }
}