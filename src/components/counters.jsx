import React, { Component } from "react";
import CounterNew from "./counterNew";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  }
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    })
    this.setState({ counters })
  }
  render() {
    return (
      <div className="counters">
        <button onClick={() => {
          this.handleReset()
        }}
          className="btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <CounterNew key={counter.id} onDelete={this.handleDelete} value={counter.value} selected={true} id={counter.id}>
            <h4>Counter Number : {counter.id}</h4>
          </CounterNew>
        ))}
      </div>
    );
  }
}

export default Counters;
