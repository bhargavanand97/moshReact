import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    const { tags } = this.state;
    return (
      <React.Fragment>
        <h3>This component has upto conditional rendering</h3>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.renderTags(tags)}</ul>
      </React.Fragment>
    );
  }

  renderTags(tags) {
    return tags && tags.length ? (
      tags.map((tag) => <li key={tag}>{tag}</li>)
    ) : (
      <li>There are no tags</li>
    );
  }

  getBadgeClasses() {
    let badgeClass = "badge m-2 badge-";
    badgeClass += this.state.count === 0 ? "warning" : "primary";
    return badgeClass;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
