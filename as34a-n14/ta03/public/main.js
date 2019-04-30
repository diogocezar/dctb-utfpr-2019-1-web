function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const url = 'https://diogocezar.github.io/bazar/json/database.json';

fetch

fetch(url)
    .then(function(response) {
        response.json().then(function(data) {
            let configs = data.configs;
            let products = data.products;
            return configs.map(function(config) {
                let div = createNode('div'),
                    h1 = createNode('h1');
                    h1.innerHTML = '${config.title}';
                    append(div, h1);
            })
        });
    })
    .catch(function(err) {
        console.error('Failed retrieving information', err);
    });