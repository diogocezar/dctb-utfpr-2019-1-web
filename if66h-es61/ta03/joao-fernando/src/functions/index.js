const plotMyRepos = json => {
  const products = json.products
  const $repos = document.querySelector("#repos");

  const list = products.map(item => {
    const listp = item.description.map(desc => {
      //console.log(desc);
      if(Object.keys(desc) == 'p'){
        return `<p>${desc.p}</p>`;
      }
      if (Object.keys(desc) == 'h4') {
        return `<h4>${desc.h4}</h4>`;
      }
    });
    console.log();

    const preco = item.price.toFixed(2);

    return `<div class="item ${item.active}">
              <li>
                <h2>${item.name}</h2>
                <img src="${item.image}" class="img_products"/>
                <p>${listp.join('')}</p>
                <h2>R$${preco}</h2>
                <button type="button">Comprar</button>
              </li>
            </div>`;
  });
  $repos.insertAdjacentHTML("beforeend", list.join(""));
};

export { plotMyRepos };


//const description = item.description.map(descrip => });