$(document).ready(() => {

    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: (result) => {
            setConfig(result.configs);
            setProducts(result.products);
        },
    });
});

const setConfig = (config => {
    
    var title = document.getElementById('title');
    title.innerText = config.title;

    var subTitle = document.getElementById('subTitle');
    subTitle.innerText = config.subTitle;

    var email = document.getElementById('email');
    email.innerText = config.email;

    var phone = document.getElementById('phone');
    phone.innerText = config.phone;

    var description1 = document.getElementById('description1');
    description1.innerText = config.description[0].p;

    var description2 = document.getElementById('description2');
    description2.innerText = config.description[1].p;

    var description3 = document.getElementById('description');
    description3.innerText = config.description[2].h2;

    var description4 = document.getElementById('description');
    description4.innerText = config.description[3].p;
});

const setProducts = (itens => {

    var text = '';
    var content = document.getElementById('products');

    itens.forEach(item => {
        var div = document.createElement("div");

        text += "<h1 class='productTitle'>" + item.name + "</h1>";
        text += "<img src=" + item.image + " />";

        item.description.forEach(divElement => {
            $.each(divElement, (tag, value) => {
                text += "<" + tag + ">" + value + "</" + tag + ">";
            });
        });

        text += "<p class='price'> R$" + item.price + "</p>";

        if (item.active == true) {
            div.className = "products";
            text += "<button class='buy-button'>COMPRAR</button>";
        } else {
            div.className = "sold";
        }

        div.innerHTML = text;
        text = '';
        content.appendChild(div);
    });
});