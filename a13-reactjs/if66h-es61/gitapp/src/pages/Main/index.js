import React, { Component } from "react";
import "./styles.css";
import Clock from "../../components/Clock";
import Header from "../../components/Header";
import List from "../../components/List";

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Clock />
        <List />
      </>
    );
  }
}

export default Main;
