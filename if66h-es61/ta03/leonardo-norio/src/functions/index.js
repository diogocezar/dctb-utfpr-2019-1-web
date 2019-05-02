const plotMyRepos = json => {
  console.log(json)

  const { configs } = json
  const { products } = json
  const { description } = configs

  const $init = document.querySelector("#init")
  const $products = document.querySelector("#products")

  const teste = description.map(item => {
    if (item.p)
      return `<p>${item.p}</p>`
    else if (item.h2)
      return `<h2>${item.h2}</h2>`
  });

  const starter = `<h1>${configs.title}</h1>
  <h2>${configs.subTitle}</h2>
  <a href="${configs.email}"/>${configs.email}</a>
  <a href="${configs.phone}">${configs.phone}</a>` + teste.join("");

  function catchName(data){
    if(data.active)
      return `<div class="active">` 
    else
      return `<div class="souldOut">`
  }

  const list = products.map(item => {
    return catchName(item)
    +`<h2>${item.name}</h2><img src="${item.image}">` + item.description.map(item2 => {
      if (item2.p)
        return `<p>${item2.p}</p>`
      else if (item2.h4)
        return `<h4>${item2.h4}</h4>`
    }).join("") + `<h2 class="price"> R$ ${item.price},00 </h2><button href="" class="buy">Comprar</button><button href="" class="whats">WhatsApp</button></div>`;
  });

  $products.insertAdjacentHTML("beforeend", list.join(""))
  $init.insertAdjacentHTML("beforeend", starter)
};



export { plotMyRepos };