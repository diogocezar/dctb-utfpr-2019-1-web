import React, { Component } from "react";
import api from "../../services/api";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import { Link } from "react-router-dom";

class List extends Component {
  state = {
    filter: "diogocezar",
    repos: null
  };
  loadRepos = async () => {
    const url = `${this.state.filter}/repos`;
    const response = await api.get(url);
    this.setState({ repos: response.data });
  };
  componentDidMount() {
    this.loadRepos();
  }
  handleChangeInput = e => {
    this.setState({ filter: e.target.value });
  };
  handleButton = () => {
    this.loadRepos();
  };
  render() {
    return (
      <>
        <h1 className="repos">Lista de Repositórios - {this.state.filter}</h1>
        <div id="repos-filter">
          <Input onChange={this.handleChangeInput} />
          <Button onClick={this.handleButton}>Filtrar</Button>
        </div>
        <div id="repos-list">
          {(this.state.repos &&
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
