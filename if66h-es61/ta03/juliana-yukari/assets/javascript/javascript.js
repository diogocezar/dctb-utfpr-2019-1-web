$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: function(result){

            var res = result.configs;  
            var bazarcont = document.getElementById('container-info');
            var info = '';
            info += "<h1>" + res.title + "</h1>";
            info += "<h2>" + res.subTitle + "</h2>";
            info += "<p>" + res.email + "</p>";
            info += "<p>" + res.phone + "</p>";
            info += "<p>" + res.description[0].p + "</p>";
            info += "<p>" + res.description[1].p + "</p>";
            info += "<h2>" + res.description[2].h2 + "</h2>";
            info += "<p>" + res.description[3].p + "</p>";   
            bazarcont.innerHTML = info;
            
            var prod = result.products;
            var dado = document.getElementById('container-prod');
            var info1 = '';
            prod.forEach(produto => {
                var aux = document.createElement("div");
                info1 += "<h1 id='name'>"+produto.name+"</h1>";
                info1 += "<img src="+produto.image+" />";
                produto.description.forEach(desc=> {
                    $.each(desc, function(tag, texto){
                        info1 += "<" + tag +">"+ texto +"</"+ tag +">";
                    });
                });
                
                info1 += "<h3> R$"+produto.price+"</h3>";

                if(produto.active == true){
                    aux.className = "infos";
                    info1 += "<button>comprar</button>";
                }
                else{
                    aux.className = "indisponivel";
                    info1 += "<button>comprar</button>";

                }

                aux.innerHTML = info1;
                info1 = '';
                dado.appendChild(aux);
            });
        },
    });
});