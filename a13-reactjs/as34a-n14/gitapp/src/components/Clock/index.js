import React, { Component } from "react";
import "./styles.css";

class Clock extends Component {
  state = {
    time: null
  };
  updateTime = () => {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };
  componentDidMount() {
    this.updateTime();
  }
  render() {
    return <h1 class="clock">{this.state.time}</h1>;
  }
}

export default Clock;
