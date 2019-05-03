$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        success: function (gt) {

            const cfg = gt.configs;
            const pdt = gt.products;
            var h = document.querySelector('div#header');
            var p = document.querySelector('div#products');
            var content = '';

            function renderConfigs() {
                const title = document.createElement("h1");
                title.innerHTML = cfg.title;
                h.appendChild(title);
                const subTitle = document.createElement("h2");
                subTitle.innerHTML = cfg.subTitle;
                h.appendChild(subTitle);
                const mail = document.createElement("p");
                mail.innerHTML = cfg.email;
                h.appendChild(mail);
                const fone = document.createElement("p");
                fone.innerHTML = cfg.phone;
                h.appendChild(fone);

                var container = document.createElement("div");
                container.setAttribute("class", "container");
                h.appendChild(container);
                
                const desc1 = document.createElement("p");
                desc1.innerHTML = cfg.description[0].p;
                container.appendChild(desc1);
                const desc2 = document.createElement("p");
                desc2.innerHTML = cfg.description[1].p;
                container.appendChild(desc2);
                const desc3 = document.createElement("h2");
                desc3.innerHTML = cfg.description[2].h2;
                container.appendChild(desc3);
                const desc4 = document.createElement("p");
                desc4.innerHTML = cfg.description[3].p;
                container.appendChild(desc4);
            }
            
            

            function renderProducts() {
                for (product of pdt) {

                    var div = document.createElement("div");
                    div.setAttribute("class", "boxProduct");

                    content += "<h2>" + product.name + "</h2>";
                    content += "<img src=" + product.image + ">";


                    for (description of product.description) {
                        if (description.p) {
                            content += "<p>" + description.p + "</p>";
                        } else if (description.h4) {
                            content += "<h4>" + description.h4 + "</h4>";
                        }
                        console.log(description);
                    }
                    content += "<p id='price'>R$" + product.price + "</p>";
                    content += "<a href = 'mailto:diogo@diogocezar.com'><button>COMPRAR</button></a>";

                    div.innerHTML = content;
                    content = '';
                    p.appendChild(div);
                }

            }
            renderConfigs();
            renderProducts();

        }
    });
});
