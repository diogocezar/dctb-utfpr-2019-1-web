const plotMyRepos = json => {
  console.log(json)
  const $cabecalho = document.querySelector("#cabecalho");
  const $product = document.querySelector("#product");

  const {configs, products} = json

  let headerElements = `<h1>${configs.title}</h1>
  <h2>${configs.subTitle}</h2>
  <p><a href="${configs.email}"/>${configs.email}</a></p>
  <p><a href="${configs.phone}">${configs.phone}</a></p>
  <p>${configs.description[0].p}
  <p>${configs.description[1].p}
  <h2>${configs.description[2].h2}</h2>
  <p>${configs.description[3].p}`;

  const list = products.map(item => {
    return `<div class="flex column ${item.active ? "" : "sold"} "><h2>${item.name}</h2><img src="${item.image}">` + item.description.map(desc => {
      if(desc.h4){
        return `<h4>${desc.h4}</h4>`
      }
      if(desc.p){
        return `<p>${desc.p}</p>`
      }

    }).join("") + `<h2 class="valor"> R$ ${item.price},00 </h2><button href="">Comprar</button></div>`;
  });
  $product.insertAdjacentHTML("beforeend", list.join(""));
  $cabecalho.insertAdjacentHTML("beforeend", headerElements)
};

export { plotMyRepos };
