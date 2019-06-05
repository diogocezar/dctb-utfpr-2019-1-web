import React, { Component } from "react";
import api from "../../services/api";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    repos: [],
    filter: "diogocezar"
  };
  handleButtonClick = () => {
    this.loadRepos();
  };
  loadRepos = async () => {
    const url = `${this.state.filter}/repos`;
    const response = await api.get(url);
    this.setState({ repos: response.data });
  };
  handleChangeInput = e => {
    this.setState({ filter: e.target.value });
  };
  componentDidMount() {
    this.loadRepos();
  }
  render() {
    return (
      <>
        <h1 className="repos">Lista de Repositórios - {this.state.filter}</h1>
        <div id="repos-filter">
          <Input
            message="Digite um usuário..."
            onChange={this.handleChangeInput}
          />
          <Button onClick={this.handleButtonClick}>Filtrar</Button>
        </div>
        <div id="repos-list">
          {(this.state.repos.length &&
            this.state.repos.map((item, key) => {
              return (
                <article key={key}>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                  <Link to={`/details/${this.state.filter}/${item.id}`}>
                    Detalhes
                  </Link>
                </article>
              );
            })) || <p>Carregando...</p>}
        </div>
      </>
    );
  }
}

export default List;
