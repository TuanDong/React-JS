import React, { Component, Fragment } from 'react'
import Search from './Search'
import Sort from './Sort'
export default class Control extends Component {
    OnSearch = (keyword) => {
        this.props.onsearch(keyword);
    }
    OnSort = (sortName, value) =>{
        this.props.onsort(sortName,value);
    }
    render() {
        return (
            <Fragment>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                   <Search onSearch={this.OnSearch}/>

                </div>

                <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort onSort={this.OnSort}/>

                </div>
            </Fragment>
        )
    }
}