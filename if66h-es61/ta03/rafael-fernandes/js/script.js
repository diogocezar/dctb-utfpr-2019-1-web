$(document).ready(function () {
    $.ajax({
        url: "https://diogocezar.github.io/bazar/json/database.json",
        dataType: "json",
        success: function (result) { // Process your JSON data here
            //Titulo e topo
            document.title = result.configs.title;
            document.getElementsByClassName('container-fluid')[0].innerHTML = "<h1 class='text-center pt-5'><b>" + result.configs.title + "</b></h1>";
            document.getElementsByClassName('container-fluid')[0].innerHTML += "<h2 class='text-center'><b>" + result.configs.subTitle + "</b></h2>";
            document.getElementsByClassName('container-fluid')[0].innerHTML += "<p class='text-center mb-0'><a href=mailto:" + result.configs.email + ">" + result.configs.email + "</a></p>";
            document.getElementsByClassName('container-fluid')[0].innerHTML += "<p class='text-center'><a href=tel:" + result.configs.phone + ">" + result.configs.phone + "</a></p>";
            result.configs.description.forEach(function (descriptions) {
                let desc = '';
                if (descriptions.h2) {
                    desc += "<h2 class='text-center'>" + descriptions.h2 + "</h2>";
                }
                if (descriptions.p) {
                    desc += "<p class='text-center'>" + descriptions.p + "</p>";
                }
                document.getElementsByClassName('container-fluid')[0].innerHTML += desc;
            });
            //Produtos
            result.products.forEach(function (p) {
                if (p.active) { //Mostrar somente produtos ativos
                    let desc = '';
                    p.description.forEach(function (x) {
                        if (x.h4) {
                            desc += "<h4 class='p-4 text-left'><b>" + x.h4 + "</b></h4>";
                        }
                        if (x.p) {
                            desc += "<p class='px-4 py-1 text-left'>" + x.p + "</p>";
                        }

                    });
                    document.getElementsByClassName('card-columns')[0].innerHTML +=
                        "<div class='card text-center mb-5' style='min-width: 20rem; max-width: 40rem;'>" +
                        "<h2><b>" + p.name + "</b></h2>" +
                        "<a href=" + p.image + ">" + "<img src=" + p.image + " class='img-fluid p-4'>" + "</a>" +
                        desc +
                        "<h2><b>R$" + p.price + "</b></h2>" +
                        "<a href= mailto:diogo@diogocezar.com class='btn btn-outline-dark btn-lg m-4'><b>COMPRAR</b></a>" +
                        "</div>";
                }
            });
        }
    });
});


