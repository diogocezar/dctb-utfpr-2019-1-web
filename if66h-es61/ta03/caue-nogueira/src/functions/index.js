const plotMyRepos = json => {
  const mainSection = document.querySelector("#main-container");
  
  document.title = json.configs.title;
  mainSection.innerHTML=`
  <h1>${json.configs.title}</h1>
  <h2>${json.configs.subTitle}</h2>

  <a href="mailto:${json.configs.email}">${json.configs.email}</a>
  <a href="tel:${json.configs.phone}">${json.configs.phone}</a>
  
  <p>${json.configs.description[0].p}</p>
  <p>${json.configs.description[1].p}</p>
  <h2>${json.configs.description[2].h2}</h2>
  <p>${json.configs.description[3].p}</p>
  
  <section id="products-container">

    <div class="active-${json.products[0].active}">

      <h2>${json.products[0].name}</h2>
      <a href="${json.products[0].image}">
        <img src="${json.products[0].image}">
      </a>

      <h4>${json.products[0].description[0].h4}</h4>
      <p>${json.products[0].description[1].p}</p>
      <p>${json.products[0].description[2].p}</p>
      <p>${json.products[0].description[3].p}</p>

      <h2 class="price">R$ ${json.products[0].price},00</h2>
      <button>Comprar</button>

    </div>

    <div class="active-${json.products[1].active}">

      <h2>${json.products[1].name}</h2>
      <a href="${json.products[1].image}">
        <img src="${json.products[1].image}">
      </a>

      <h4>${json.products[1].description[0].h4}</h4>
      <p>${json.products[1].description[1].p}</p>
      <p>${json.products[1].description[2].p}</p>
      <p>${json.products[1].description[3].p}</p>
      <p>${json.products[1].description[4].p}</p>
      <p>${json.products[1].description[5].p}</p>
      <p>${json.products[1].description[6].p}</p>
      <p>${json.products[1].description[7].p}</p>
      <p>${json.products[1].description[8].p}</p>
      <h4>${json.products[1].description[9].h4}</h4>
      <p>${json.products[1].description[10].p}</p>
      <p>${json.products[1].description[11].p}</p>
      <p>${json.products[1].description[12].p}</p>
      <p>${json.products[1].description[13].p}</p>
      <p>${json.products[1].description[14].p}</p>
      <h4>${json.products[1].description[15].p}</h4>
      <p>${json.products[1].description[16].p}</p>
      <p>${json.products[1].description[17].p}</p>
      <p>${json.products[1].description[18].p}</p>
      <h4>${json.products[1].description[19].p}</h4>
      <p>${json.products[1].description[20].p}</p>
      <p>${json.products[1].description[21].p}</p>
      <p>${json.products[1].description[22].p}</p>
      <p>${json.products[1].description[23].p}</p>
      <p>${json.products[1].description[24].p}</p>

      <h2 class="price">R$ ${json.products[0].price},00</h2>
      <button>Comprar</button>

    </div>

    <div class="active-${json.products[2].active}">

      <h2>${json.products[2].name}</h2>
      <a href="${json.products[2].image}">
        <img src="${json.products[2].image}">
      </a>

      <h4>${json.products[2].description[0].h4}</h4>
      <p>${json.products[2].description[1].p}</p>
      <p>${json.products[2].description[2].p}</p>
      
      <h2 class="price">R$ ${json.products[2].price},00</h2>
      <button>Comprar</button>

    </div>

    <div class="active-${json.products[3].active}">

      <h2>${json.products[3].name}</h2>
      <a href="${json.products[3].image}">
        <img src="${json.products[3].image}">
      </a>

      <h4>${json.products[3].description[0].h4}</h4>
      <p>${json.products[3].description[1].p}</p>
      
      <h2 class="price">R$ ${json.products[3].price},00</h2>
      <button>Comprar</button>

    </div>

    <div class="active-${json.products[4].active}">

      <h2>${json.products[4].name}</h2>
      <a href="${json.products[4].image}">
        <img src="${json.products[4].image}">
      </a>

      <h4>${json.products[4].description[0].h4}</h4>
      <p>${json.products[4].description[1].p}</p>
      <h4>${json.products[4].description[2].h4}</h4>
      <p>${json.products[4].description[3].p}</p>
      <p>${json.products[4].description[4].p}</p>
      <p>${json.products[4].description[5].p}</p>
      <p>${json.products[4].description[6].p}</p>
      <p>${json.products[4].description[7].p}</p>
      <p>${json.products[4].description[8].p}</p>
      <p>${json.products[4].description[9].p}</p>
      <p>${json.products[4].description[10].p}</p>
      <p>${json.products[4].description[11].p}</p>
      <p>${json.products[4].description[12].p}</p>
      
      <h2 class="price">R$ ${json.products[4].price},00</h2>
      <button>Comprar</button>

    </div>

    <div class="active-${json.products[5].active}">

      <h2>${json.products[5].name}</h2>
      <a href="${json.products[5].image}">
        <img src="${json.products[5].image}">
      </a>

      <h4>${json.products[5].description[0].h4}</h4>
      <p>${json.products[5].description[1].p}</p>
      <p>${json.products[5].description[2].p}</p>
      <p>${json.products[5].description[3].p}</p>
      <p>${json.products[5].description[4].p}</p>
      <p>${json.products[5].description[5].p}</p>
      <p>${json.products[5].description[6].p}</p>
      <p>${json.products[5].description[7].p}</p>
      <p>${json.products[5].description[8].p}</p>
      <p>${json.products[5].description[9].p}</p>
      
      <h2 class="price">R$ ${json.products[5].price},00</h2>
      <button>Comprar</button>

    </div>

    <div class="active-${json.products[6].active}">

      <h2>${json.products[6].name}</h2>
      <a href="${json.products[6].image}">
        <img src="${json.products[6].image}">
      </a>

      <h4>${json.products[6].description[0].h4}</h4>
      <p>${json.products[6].description[1].p}</p>
      <p>${json.products[6].description[2].p}</p>
      
      <h2 class="price">R$ ${json.products[6].price},00</h2>
      <button>Comprar</button>

    </div>

  </section>`

};

export { plotMyRepos };
