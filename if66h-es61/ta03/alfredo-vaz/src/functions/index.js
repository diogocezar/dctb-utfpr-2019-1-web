const plotMyRepos = json => {
  var $ = document.querySelector.bind(document);

  const about = $("#about");
  let html = "<h1>" + json.configs.title + "</h1>";
  html += "<h2>" + json.configs.subTitle + "</h2>";
  html += "<p><a href='mailto:diogo@diogocezar.com' id='emailContato'>" + json.configs.email + "</a></p>";
  html += "<a href='tel:+5543996299435' id='telefone'>" + json.configs.phone + "</a>";

  json.configs.description.map(desc => {
    html += "<" + Object.keys(desc) + ">" + Object.values(desc) + "</" + Object.keys(desc) + ">";
  });

  about.innerHTML = html;

  const products = $("#myProducts");
  json.products.map(chave => {
    let html = '';
    let espaco = document.createElement("div");

    html += "<h1>" + chave.name + "</h1>";
    html += "<img src=" + chave.image + " />";

    chave.description.map(obj => {
      html += "<" + Object.keys(obj) + ">" + Object.values(obj) + "</" + Object.keys(obj) + ">";
    });

    html += "<p class='preco'>R$" + chave.price + "</p>";

    if(chave.active){
      espaco.className = "produto";
      html += "<button>COMPRAR</button>";
    }else{
        espaco.className = "produto vendido";
        html += "<p class='vendidoTexto'>VENDIDO ;(</p>";
    }
    espaco.innerHTML = html;
    products.appendChild(espaco);
  });
};

export { plotMyRepos };
