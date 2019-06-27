import React from 'react';
import { Link} from "react-router-dom";

export default class TestReactRouter extends React.Component {
    render() {
        var product = [
            {
                id:1,
                slug:'iphone',
                name:'iphone X',
                price:500
            },
            {
                id:2,
                slug:'samsung',
                name:'Sam Sung Note 9',
                price:400
            },
            {
                id:3,
                slug:'oppo',
                name:'Oppo F9',
                price:300
            }
        ];
        var { match,location } =this.props;
        // console.log(this.props);
        var url = match.url;
        var result = product.map((item,index)=>{
            return <Link to={`${url}/${item.slug}`} key={index}>
                <li className="list-group-item" >
                    {item.name} - {item.price}
                </li>
            </Link>
            
        });
        var params = location.state ? location.state.referrer : "";
        return (
            <div className="container">
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <p>{params}</p>
                </div>
            </div>
        );
    }
}