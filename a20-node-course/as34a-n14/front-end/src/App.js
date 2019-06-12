import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    products: []
  };
  deleteProduct = async product => {
    const response = await axios.delete(
      `http://localhost:9999/api/products/${product._id}`,
      {
        crossDomain: true
      }
    );
    this.loadProducts();
  };
  loadProducts = async () => {
    const response = await axios.get("http://localhost:9999/api/products", {
      crossDomain: true
    });
    this.setState({
      products: response.data
    });
  };
  componentDidMount() {
    this.loadProducts();
  }
  render() {
    return (
      <>
        <h1>Lista de Produtos</h1>
        <ul>
          {this.state.products.map(item => {
            return (
              <li>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.url}>{item.url}</a>
                <button
                  onClick={() => {
                    this.deleteProduct(item);
                  }}
                >
                  Excluir
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
