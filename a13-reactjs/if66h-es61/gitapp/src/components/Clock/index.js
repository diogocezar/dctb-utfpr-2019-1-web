import React, { Component } from "react";
import "./styles.css";

class Clock extends Component {
  state = {
    time: null
  };
  updateClock = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }
  render() {
    return <h1 className="clock">{this.state.time}</h1>;
  }
}

export default Clock;
