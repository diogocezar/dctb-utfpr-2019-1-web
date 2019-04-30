$(document).ready(function () {
    var json = 'https://diogocezar.github.io/bazar/json/database.json'
    $.ajax({
        type: "GET",
        url: json,
        success: function (result) {
            const vue = new Vue({
                el: '#dev-is-selling',
                data: result,
                methods: {
                    generateHtml: function (data) {
                        html = [];
                        data.forEach((value) => {
                            html.push("<" + Object.keys(value)[0] + ">" + Object.values(value)[0] + "</" + Object.keys(value)[0] + ">")
                        });
                        return html;
                    }
                }
            })
        },
        error: function (data) {
            alert("ERRO DE BUSCA");
        }
    });
});
