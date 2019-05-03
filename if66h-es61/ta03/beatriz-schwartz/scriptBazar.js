$(document).ready(function(){

    $.ajax({

        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',


        success: function(parametro){
        
            var x = parametro.configs;

            var titulo = document.getElementById('titulo');
            titulo.innerText = x.title;

            var subtitulo = document.getElementById('subTitulo');
            subtitulo.innerText = x.subTitle;

            var email = document.getElementById('email');
            email.innerText = x.email;

            var telefone = document.getElementById('telefone');
            telefone.innerText = x.phone;

            var texto1 = document.getElementById('texto1');
            texto1.innerText = x.description[0].p;

            var texto2 = document.getElementById('texto2');
            texto2.innerText = x.description[1].p;

            var texto3 = document.getElementById('subtitulo2');
            texto3.innerText = x.description[2].h2;

            var texto4 = document.getElementById('texto3');
            texto4.innerText = x.description[3].p;
    
            var vendas = parametro.products;

            var conteudo = document.getElementById('produtos');

            var texto = '';

            vendas.forEach(item => {

                var espaco = document.createElement("div");

                texto += "<h1 class='tituloProduto'>"+item.name+"</h1>";
                texto += "<img src="+item.image+" />";

                item.description.forEach(dElemento => {
                    $.each(dElemento, function(tag, valor){
                        texto += "<" + tag +">"+ valor +"</"+ tag +">";
                    });
                });
                
                texto += "<p class='valor'>R$"+item.price+"</p>";

                if(item.active == true){

                    espaco.className = "produto";
                    texto += "<button class='comprar'>COMPRAR</button>";
                }

                else{

                    espaco.className = "vendido";
                    texto += "<p class='vendido'>VENDIDO</p>";
                }

                espaco.innerHTML = texto;

                texto = '';

                conteudo.appendChild(espaco);

            });

            
        },
    });
});