import React, { Component } from 'react';

// Define the interface for the state
interface CounterState {
  count: number;  // 'count' is expected to be a number
}

class Counter extends Component<{}, CounterState> { 
  // Initialize state with type annotation
  state: CounterState = {
    count: 0
  }; 

  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 

  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 

export default Counter;
