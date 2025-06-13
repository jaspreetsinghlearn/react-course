import logo from './logo.svg';
import './App.css';

import React, { Component, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Assignment-2 Counter Application</h1>
      <div className="row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

// Class Component
class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <p className="count">{this.state.count}</p>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

// Functional Component
function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p className="count">{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

