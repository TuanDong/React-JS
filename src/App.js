import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import TutorialStateProps from './TutorialStateProps'
import Todolist from './Todolist'
import ShopingCart from './component/component_tutorial_redux/ShopingCart'
import Not_foundPage from './Not_foundPage'

// hook
// function App() {
//   const [count,setcount] = useState(0);
//   const [number,setnumber] = useState(0);
//   useEffect(() => {
//     console.log(count);
//     // setcount(count + 1);
//   });
//   return (
//     <div className="App">
//       <p>You clicked {count+' : '+number} times</p>
//       <button onClick={() => {setcount(count + 1);setnumber(number+1);}}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default App;
const MenuLink = ({label,to,activeOnlyWhenExact}) =>{
    return (
        <Route 
            path={to}
            exact = {activeOnlyWhenExact}
            children = {({match}) => {
                var active = match ? "active" : "";
                return (
                    <li className={active}>
                        <Link to={to} >
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class App extends React.Component {
    // const [count,setcount] = useState(0);
    // const [number,setnumber] = useState(0);
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    //     console.log("contructor");
    // }
    // componentWillUnmount() {
    //     console.log("wil UnMount");
    //     this.setState({ number: 55 });
    // }
    // componentWillMount() {
    //     console.log("wil Mount");

    // }
    // componentDidMount() {
    //     console.log(this.state.number);
    //     console.log("did mount");
    //     this.setState({ number: 55 });

    // }

    // componentDidUpdate() {
    //     console.log("did Update");
    //     console.log(this.state.number);
    // }
    render() {
        // console.log("contructor - will Mount - render - did Mount - render - dipUpdate");
        return (
            
            //<TutorialStateProps />
            //<Todolist />
            //<ShopingCart />

            <Router>


                <nav className="navbar navbar-default" role="navigation">
                    
                    <div className="navbar-header">
                        <NavLink to="/" className="navbar-brand" >Title</NavLink>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <MenuLink  to="/" label = "Tutorial React JS" activeOnlyWhenExact = {true} />
                            <MenuLink  to="/todolist" label = "Todolist" activeOnlyWhenExact = {false} />
                            <MenuLink  to="/shopcart" label = "ShopingCart" activeOnlyWhenExact = {false} />
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact component={TutorialStateProps} />
                    <Route path="/todolist/" component={Todolist} />
                    <Route path="/shopcart/" component={ShopingCart} />
                    <Route component={Not_foundPage}/>
                </Switch>

            </Router>

        )
        
    }

}

export default App;