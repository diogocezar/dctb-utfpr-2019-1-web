const plotMyRepos = json => {
  const products = json.products
  const {configs} = json.products
  const $repos = document.querySelector("#repos");



  
  const list = products.map(item => {
  const listp = item.description.map(desc => {     
      if(Object.keys(desc) == 'p'){
        return `<p>${desc.p}</p>`;
      }
      if (Object.keys(desc) == 'h4') {
        return `<h4>${desc.h4}</h4>`;
      }
    });  

    const preco = item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });  

    return `<div class="item ${item.active}">
              <li>
                <h2>${item.name}</h2>
                <img src="${item.image}" class="images"/>
                <p>${listp.join('')}</p>
                <h2>R$${preco}</h2>
                <button id="btn">Comprar</button>
              </li>
            </div>`;
  });
  $repos.insertAdjacentHTML("beforeend", list.join(""));
};
export { plotMyRepos };  

