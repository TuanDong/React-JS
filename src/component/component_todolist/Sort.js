import React, { Component } from 'react'

export default class Sort extends Component {
    OnSort = (sortName, value) => {
        this.props.onSort(sortName,value);
    }
    render() {
        return (
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdowrMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    Sắp xếp <i className="fas fa-caret-square-down"></i>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdowrMenu1">
                    <li style={{ padding: 10, fontSize: 16, fontWeight: "bold", cursor: "pointer"}} onClick = {() => this.OnSort('name',1)}>
                        <i className="fas fa-sort-alpha-down">&nbsp;</i>Tên A-Z                      
                    </li>
                    <li style={{ padding: 10, fontSize: 16, fontWeight: "bold", cursor: "pointer"}} onClick = {() =>this.OnSort('name',-1)}>
                        <i className="fas fa-sort-alpha-up">&nbsp;</i>Tên Z-A
                    </li>
                    <li role="separator" className="divider"></li>
                    <li style={{ padding: 10, fontSize: 16, fontWeight: "bold", cursor: "pointer"}} onClick = {() =>this.OnSort('status',1)}>
                        Kích Hoạt
                    </li>
                    <li style={{ padding: 10, fontSize: 16, fontWeight: "bold", cursor: "pointer"}} onClick = {() =>this.OnSort('status',-1)}>
                        Ẩn
                    </li>
                </ul>
            </div>

        )
    }
}