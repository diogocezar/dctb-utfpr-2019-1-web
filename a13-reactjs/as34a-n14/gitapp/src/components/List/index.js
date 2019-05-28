import React, { Component } from "react";
import api from "../../services/api";
import Button from "../Button";

class List extends Component {
  state = {
    repos: []
  };
  testButton = () => {
    alert("Clicou!");
  };
  loadRepos = async () => {
    const returnedRepos = await api.get();
    this.setState({ repos: returnedRepos.data });
  };
  componentDidMount() {
    this.loadRepos();
  }
  render() {
    return (
      <>
        <h1>Lista de Repositórios</h1>
        <Button onClick={this.testButton}>Filtrar</Button>
        <ul>
          {(this.state.repos &&
            this.state.repos.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })) || <li>Carregando...</li>}
        </ul>
      </>
    );
  }
}

export default List;
