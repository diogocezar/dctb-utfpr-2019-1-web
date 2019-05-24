import React, { Component } from "react";
import "./styles.css";
import Clock from "../../components/Clock";
import Header from "../../components/Header";
import api from "../../services/api";

class Main extends Component {
  state = {
    repos: null
  };
  loadRepos = async () => {
    const response = await api.get();
    this.setState({ repos: response.data });
  };
  componentDidMount() {
    this.loadRepos();
  }
  render() {
    return (
      <>
        <Header />
        <Clock />
        <ul>
          {(this.state.repos &&
            this.state.repos.map((item, index) => (
              <li key={index}>{item.full_name}</li>
            ))) || <li>Carregando...</li>}
        </ul>
      </>
    );
  }
}

export default Main;
