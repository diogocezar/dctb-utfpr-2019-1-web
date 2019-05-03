function loadJSON() {   
    var json = new XMLHttpRequest();
    json.overrideMimeType("application/json");
    json.open("GET", "database.json", true);
    json.onreadystatechange = function () {
      if (json.readyState == 4 && json.status == "200") {
        var produtos = JSON.parse(json.responseText);
        var configs = produtos.configs;
        var products = produtos.products;

        //Cabeçalho
        document.querySelector('.l1').innerHTML = configs.title;
        document.querySelector('.l2').innerHTML = configs.subTitle;
        document.querySelector('#link1').innerHTML = '<a id = link1 href = "mailto:' + configs.email + '">' + configs.email + '</div>' 
        document.querySelector('#link2').innerHTML = '<a id = link1 href = "tel:' + configs.phone + '">' + configs.phone + '</div>' 
        document.querySelector('.l3').innerHTML = configs.description[0].p;
        document.querySelector('.l4').innerHTML = configs.description[1].p;
        document.querySelector('.l5').innerHTML = configs.description[2].h2;
        document.querySelector('.l6').innerHTML = configs.description[3].p;

        //Produtos
        var textoProdutos;

        textoProdutos = '';

        products.forEach(element => {
            textoProdutos += '<div class = "produto ' + element.active + '">'
            textoProdutos += '<div class = "titulo">' + element.name + '</div>'
            textoProdutos += '<img class = "imagem" src = "' + element.image + '">'
            element.description.forEach (element2 => {
                var key = Object.keys (element2)
                var valor = Object.values (element2);
                textoProdutos += '<' + key + '>' + valor + '</' + key + '>'
            })
            textoProdutos += '<div class = preco>' + 'R$ ' + element.price + ',00' + '</div>'
            textoProdutos += '<a class = comprar href = "mailto:' + configs.email + '?subject=[QUERO COMPRAR] ' + element.name + '&amp;body= Olá, estou interessado no produto: ' + element.name + 'por' + element.price + '">' + 'Comprar' + '</a>'
            textoProdutos += '</div>'
        });

        document.querySelector('.produtos').innerHTML = textoProdutos;
      }
    };
    
    json.send(null);  
}

loadJSON ();

/*
<div class = "produtoTeste">
<div class = "titulo"></div>
<div class = "imagem"></div>
<div class = "descricao"></div>
<div class = "preco"></div>
<div class = "comprar"></div>
</div>
*/


