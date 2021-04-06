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
  render() {
    return (
      <div className="counters">
        {this.state.counters.map((counter) => (
          <CounterNew key={counter.id} value={counter.value} selected={true}>
            <h4>Counter Number : {counter.id}</h4>
          </CounterNew>
        ))}
      </div>
    );
  }
}

export default Counters;
