import React from 'react';
import { Redirect  } from 'react-router-dom'
import { Prompt } from 'react-router'

export default class RouterTestDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ischeck : false,
            redirect: false,
            redirectparams: false,
        }
    }
    IsCheck = (isCheck) => {
        this.setState({
            ischeck :isCheck,
            
        });
    }
    IsRedirect() {
        this.setState({
            redirect: true,
            
        });
    }
    IsRedirectParams(){
        this.setState({
            redirectparams: true,
            
        });
    }
    render() {
        var {name} = this.props.match.params;
        // console.log(this.props);
        if (this.state.redirect) {
            return <Redirect exact to="/router" />;
        }
        if (this.state.redirectparams) {
            var { location } = this.props;
            return <Redirect 
                to={{
                pathname: "/router",
                state: { referrer: location.pathname }
              }}
            />
        }
        return (
            <div className="container">
                <p>trang router detail {name}</p>
                <p>Prompt </p>
                <button type="button" className="btn btn-large btn-block btn-info" onClick={()=>this.IsCheck(false)}>Cho Phep</button>
                <button type="button" className="btn btn-large btn-block btn-danger" onClick={()=>this.IsCheck(true)}>Khong Cho Phep</button>
                <button type="button" className="btn btn-large btn-block btn-warning" onClick={()=>this.IsRedirect()}>Redirect</button>
                <button type="button" className="btn btn-large btn-block btn-warning" onClick={()=>this.IsRedirectParams()}>Redirect params</button>
                <Prompt 
                    when={this.state.ischeck} 
                    message={ location =>( `Are you sure ${location.pathname} ?`)} 
                />
            </div>
        );
    }
}