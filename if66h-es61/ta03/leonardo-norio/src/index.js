import { plotBazar } from "./functions";
import axios from "axios";

class GitHubRepos {
  constructor() {
    axios
      .get("https://diogocezar.github.io/bazar/json/database.json")
      .then(result => {
        plotBazar(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

new GitHubRepos();
