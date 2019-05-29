import React, { Component } from 'react'

export default class TaskItem extends Component {
    DeleteItem=(id)=>{
        this.props.deleteItem(id);
    }
    ChangStatus=(id)=>{
        this.props.changeStatus(id);
    }
    UpdateItem =(id)=>{
        this.props.updateItem(id);
    }
    render() {
        var {id,name,status,} = this.props.item;
        var {index} = this.props;
        return (
            <tr>
                <td>{index +1}</td>
                <td>
                    {name}
                </td>
                <td style={{ textAlign: 'center' }}>
                    <button type="button" className={status?"btn btn-danger":"btn btn-warning"} onClick={()=>this.ChangStatus(id)}>{status?"Kích Hoạt":"Ẩn"}</button>
                </td>
                <td style={{ textAlign: 'center' }}>

                    <button type="button" className="btn btn-warning" onClick={()=>this.UpdateItem(id)}><i className="fas fa-pencil-alt" >&nbsp;</i>Sửa</button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-danger" onClick={()=>this.DeleteItem(id)}><i className="far fa-trash-alt">&nbsp;</i>Xóa</button>
                </td>
            </tr>
        )
    }
}