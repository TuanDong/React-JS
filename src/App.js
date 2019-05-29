import React from 'react';
import './App.css';
//import TutorialStateProps from './TutorialStateProps'
import Todolist from './Todolist'

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
            <Todolist />
        );
    }

}

export default App;