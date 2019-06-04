import React, { Component } from "react";
import "./styles.css";
import api from "../../services/api";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
class Details extends Component {
  state = {
    repo: null
  };
  componentDidMount() {
    const { id, user } = this.props.match.params;
    this.loadRepoById(id, user);
  }
  async loadRepoById(id, user) {
    const url = `${user}/repos`;
    const response = await api.get(url);
    const repo = response.data.find(
      item => item.id.toString() === id.toString()
    );
    console.log(repo);
    this.setState({ repo: repo });
  }
  render() {
    const repo = this.state.repo;
    return (
      <>
        <Header />
        <h1>Detalhes de um Repositório</h1>
        <div id="repos-details">
          {repo && (
            <article>
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Acessar Repositório
              </a>
              <Link to="/">Voltar</Link>
            </article>
          )}
        </div>
      </>
    );
  }
}
export default Details;
