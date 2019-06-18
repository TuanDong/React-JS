import React, { Component } from 'react'
import FormAddTodo from './component/component_todolist/FormAddTodo'
import Control from './component/component_todolist/Control'
import TaskTodo from './component/component_todolist/TaskTodo'
import './App.css';

export default class Todolist extends Component {
    constructor(props) {
        super(props);
        var task = [
            {id:1,name:"React js",status:true,},
            {id:2,name:"Node js",status:true,},
            {id:3,name:"React Native",status:false,},
            {id:4,name:"Angular",status:true,}
        ]
        this.state = {
            task:task,
            status: true,
            taskEditing:"",
            filter:{
                text:"",
                status:0
            }
        }
    }
    ToggelAdd=()=>{
        this.setState({
            status: false
        });
    }
    TurnOff = ()=>{
        this.setState({
            status: true,
            taskEditing:""
        });
    }
    AddTodo = (item)=>{
        var list = this.state.task;
        if (item.id) {
            var index = this.FindIndexItem(list,item.id);console.log(item);
            list[index] = item;
            this.setState({
                task:list,
                status: true
            });
        } else {
            item.id = list.length+1;
            list.push(item);
            this.setState({
                task:list,
                status: true
            });
        }
    }
    DeleteItem=(id)=>{
        var list = this.state.task;
        var index = this.FindIndexItem(list,id);
        if(index>=0){
            list.splice(index,1);
        }
        this.setState({
            task:list
        });
    }
    ChangeStatus=(id)=>{
        var list = this.state.task;
        var index = this.FindIndexItem(list,id);
        list[index].status = !list[index].status;
        this.setState({
            task:list
        });
    }
    UpdateItem = (id) =>{ 
        var list = this.state.task;
        var index = this.FindIndexItem(list,id);
        var dataEdit = "";
        if(index >= 0){
            dataEdit=list[index];
        }
        this.setState({
            taskEditing: dataEdit,
            status: false
        });
    }
    OnSearch = (keyword) => {
        var list = this.state.task;
        var resultSearch = [];
        list.forEach((item) => {
            if(item.name.toLowerCase().indexOf(keyword.toLowerCase()) >=0) {
                resultSearch.push(item);
            }
        });
        this.setState({
            task:resultSearch
        });
    }
    OnSort = (sortName, value) => {
        var list = this.state.task;
        if(sortName === "name") {
            list.sort((a,b) => {
                if (a.name > b.name) {
                    return value;
                } else if (a.name < b.name) {
                    return -value;
                } else return 0;
            });
            this.setState({
                task:list
            });
        }
        else {
            list.sort((a,b) => {
                if (a.status > b.status) {
                    return -value;
                } else if (a.status < b.status) {
                    return value;
                } else return 0;
            });
            this.setState({
                task:list
            });
        }
    }
    searchTable = (textSearch,statusSearch) => {
        this.setState({
            filter:{
                text:textSearch,
                status:Number(statusSearch)
            }
        });
    }
    FindIndexItem(tasks,id){
        var result = -1;
        tasks.forEach((task,index)=>{
            if(task.id === id){
                result = index;
            }
        });
        return result
    }
    render() {
        var {task,filter} = this.state; 
        if (filter) {
            if (filter.text) {
                task = task.filter((item) => {
                    return item.name.toLowerCase().indexOf(filter.text.toLowerCase()) !== -1;
                });
            }
            if (filter.status) {
                task = task.filter((item) => {
                    if (filter.status === 1) {
                        return item.status === true;
                    } else {
                        return item.status === false;
                    }
                });
            }    
        }
        
        var eletoggel = !this.state.status ?<FormAddTodo status={this.TurnOff} addTodo = {this.AddTodo} task={this.state.taskEditing}/>:"";
        return (
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h1> Quản Lý Công Việc</h1>
                </div>

                <div className="row mt-50">
                    {eletoggel}
                    <div className={this.state.status?"col-xs-12 col-sm-12 col-md-12 col-lg-12":"col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
                        <button type="button" className="btn btn-sm btn-primary" onClick={()=>this.ToggelAdd()}><i className="fas fa-plus">&nbsp;</i>Thêm Công Việc</button>
                        <div className="row mt-15">

                            <Control onsearch={this.OnSearch} onsort={this.OnSort}/>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="table-responsive mt-15">
                                    <TaskTodo 
                                        task={task} 
                                        deleteitem={this.DeleteItem} 
                                        changeStatus={this.ChangeStatus} 
                                        updateItem={this.UpdateItem}
                                        onchange = {this.searchTable}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div >

        )
    }
}