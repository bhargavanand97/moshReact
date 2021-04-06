import React, { Component } from "react";
class CounterNew extends Component {
  state = {
    value: this.props.value,
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleChange("plus");
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.handleChange("minus");
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
      </div>
    );
  }

  handleChange(task) {
    switch (task) {
      case "plus":
        this.setState({
          value: this.state.value + 1,
        });
        break;
      case "minus":
        if (this.state.value > 0) {
          this.setState({
            value: this.state.value - 1,
          });
        }

        break;
      default:
      //do nothing
    }
  }

  getBadgeClasses() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.value === 0 ? "warning" : "primary";
    return badgeClass;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default CounterNew;
