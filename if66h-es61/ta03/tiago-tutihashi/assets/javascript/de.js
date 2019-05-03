function putProducts(products) {

    var text = '';

    products.forEach(product => {
        const space = document.createElement("div");

        text += "<h1>" + product.name + "</h1> <img src=" + product.image + " />";

        product.description.forEach(dE => {
            $.each(dE, function (tag, value) {
                text += "<" + tag + ">" + value + "</" + tag + ">";
            });
        });
        text += "<p>R$" + product.price + "</p>";

        if (product.active) {
            space.className = "product";
            text += "<button>COMPRAR</button>";
        } else {
            space.className = "product sold";
            text += "<p>VENDIDO</p>";
        }

        space.innerHTML = text;
        text = '';
        document.getElementById('products').appendChild(space);
    });

}

function putInfos(re) {

    document.getElementById('title').innerText = re.title;
    document.getElementById('title2').innerText = re.subTitle;
    document.getElementById('email').innerText = re.email;
    document.getElementById('phone').innerText = re.phone;
    document.getElementById('des1').innerText = re.description[0].p;
    document.getElementById('des2').innerText = re.description[1].p;
    document.getElementById('des3').innerText = re.description[2].h2;
    document.getElementById('des4').innerText = re.description[3].p;

}

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'https://diogocezar.github.io/bazar/json/database.json',
        dataType: 'json',
        success: function (result) {

            putInfos(result.configs);

            putProducts(result.products);

        },

    });
});