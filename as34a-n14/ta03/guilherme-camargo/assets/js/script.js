document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    axios.get('https://diogocezar.github.io/bazar/json/database.json')
    .then( response =>{
      let { configs, products } = response.data;  
      insertConfig(configs);  
      insertProducts(products, configs);  
    });
  }
};

insertConfig = function(configs){
  my_infos = document.querySelector('.my-infos');

  // create div.class=col-lg-12
  div_class_col = document.createElement('div')
  div_class_col.setAttribute('class','col-lg-12');
  
  // appending configs
  div_class_col.innerHTML += `<h1>${configs.title}</h1>`;
  div_class_col.innerHTML += `<h2>${configs.subTitle}</h2>`;
  div_class_col.innerHTML += `<p><a href="mailto:${configs.email}">${configs.email}</a></h1>`;
  div_class_col.innerHTML += `<p><a href="tel:${configs.phone}">${configs.phone}</a></h1>`;

  // create div.class=description
  div_class_description = document.createElement('div')
  div_class_description.setAttribute('class','description');

  for(var key in configs.description){
    aux =  configs.description[key];
    for(var k in aux){
      div_class_col.innerHTML += `<${k}>${aux[k]}</${k}>`;
    }
  }
  my_infos.append(div_class_col);
}

insertProducts = function(products, configs){
  
  div_my_row = document.querySelector('.my-row');

 
  
  // create div.class=description
  div_class_description = document.createElement('div')
  div_class_description.setAttribute('class','description');

  for(let key in products){
    let aux =  products[key];

    // create div.class=description
    div_class_description = document.createElement('div')
    div_class_description.setAttribute('class','description');
    
    // create div.class=item well
    div_item_well = document.createElement('div')
    div_item_well.setAttribute('class',`item well ${!aux.active && 'selled'}`);

    div_class_description.innerHTML += `<h2>${aux.name}</h2>`;
    div_class_description.innerHTML += `<a href="${aux.image}"><img class="product-image" src="${aux.image}"></img></a>`;

    for(let key in aux.description){
      let aux2 =  aux.description[key];
      
      for(let k in aux2){
        div_class_description.innerHTML += `<${k}>${aux2[k]}</${k}>`;
        
      }
    }
    
    div_class_description.innerHTML += `<h2 class="price">R$ ${aux.price},00</h2>`;
    div_class_description.innerHTML +=`<a href="mailto:${configs.email}?subject=${configs.subject} ${aux.name}&body=${configs.bodyMail}: ${aux.name} por R$ ${aux.price},00"><button>Comprar</button></a>`;
    div_class_description.innerHTML +=`<a href="whatsapp://send?text=${configs.bodyWhats} ${aux.name} por R$ ${aux.price},00 - - Acesse aqui: ${configs.url}" class="whatsapp"><button>Whatsapp</button></a>`;
    
    div_item_well.append(div_class_description);

    div_my_row.append(div_item_well)
  }
  
}
