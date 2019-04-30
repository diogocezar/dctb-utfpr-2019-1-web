$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: function(result){
            // Configs
            var con = result.configs;

            var titulo = document.getElementById('titulo');
            titulo.innerText = con.title;

            var subtitulo = document.getElementById('subTitulo');
            subtitulo.innerText = con.subTitle;

            var email = document.getElementById('email');
            email.innerText = con.email;

            var telefone = document.getElementById('telefone');
            telefone.innerText = con.phone;

            var descri1 = document.getElementById('descricao1');
            descri1.innerText = con.description[0].p;

            var descri2 = document.getElementById('descricao2');
            descri2.innerText = con.description[1].p;

            var descri3 = document.getElementById('descricao3');
            descri3.innerText = con.description[2].h2;

            var descri4 = document.getElementById('descricao4');
            descri4.innerText = con.description[3].p;
            
            //Products
            var itens = result.products;
            var conteudo = document.getElementById('produtos');
            var texto = '';
            itens.forEach(item => {
                var espaco = document.createElement("div");

                texto += "<h1 class='tituloProduto'>"+item.name+"</h1>";
                texto += "<img src="+item.image+" />";

                item.description.forEach(dElemento => {
                    $.each(dElemento, function(tag, valor){
                        texto += "<" + tag +">"+ valor +"</"+ tag +">";
                    });
                });
                texto += "<p class='preco'>R$"+item.price+"</p>";

                if(item.active == true){
                    espaco.className = "produto";
                    texto += "<button class='botao-comprar'>COMPRAR</button>";
                }
                else{
                    espaco.className = "produto vendido";
                    texto += "<p class='vendidoTexto'>VENDIDO</p>";
                }

                espaco.innerHTML = texto;
                texto = '';
                conteudo.appendChild(espaco);
            });
        },
    });
});