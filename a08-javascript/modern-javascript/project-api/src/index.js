import { plotMyRepos } from "./functions";
import axios from "axios";

class GitHubRepos {
  constructor() {
    axios
      .get("https://api.github.com/users/maumauagain/repos")
      .then(result => {
        plotMyRepos(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

new GitHubRepos();
