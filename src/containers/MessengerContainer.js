import React, { Component } from 'react'
import {connect} from 'react-redux'
import Messenger from './../component/component_tutorial_redux/Messenger'


class MessengerContainer extends Component {
    render() {
        return (
            <Messenger menssenger = {this.props.messg}/>
        )
    }
}
const mapStateToProps = state => {
    return ({
        messg: state.messenger
    });
}

export default connect(mapStateToProps, null)(MessengerContainer);