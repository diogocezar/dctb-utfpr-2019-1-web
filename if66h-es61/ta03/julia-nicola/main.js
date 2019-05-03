const url = 'https://diogocezar.github.io/bazar/json/database.json';

function createNode(element) {
    return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

fetch(url)
    .then(function(response) {
        response.json().then(function(data) {
            let conf = data.conf;
            return conf.map(function(config) {
                let div = createNode('div'),
                    h1 = createNode('h1');
                    h1.innerHTML = '${config.title}';
                    append(div, h1);
            })
        });
    })
    .catch(function(err) {
        console.log("error");
    });