import React, { Component } from "react";
// import ClassCounter from "./components/ClassCounter";
import Counter from './components/Counter'
import "./App.css"


class App extends Component {
  render() {
    return <Counter maxNumber="3" />;
  }
}

export default App;


// function App() {
//   return (
//         <div className="counter">
//         <h1>React Counter</h1>
        
//       </div>
//   );
// }



