const plotMyRepos = json => {
  const $repos = document.querySelector("#repos");
  const list = json.map(item => {
    return `<li><a href="${item.html_url}>${item.name}</a></li>`;
  });
  $repos.insertAdjacentHTML("beforeend", list.join(""));
};

export { plotMyRepos };
