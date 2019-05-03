const url = 'https://diogocezar.github.io/bazar/json/database.json'

let configs = {}
let products = []

const getConfigs = () => {
  fetch(url, { method: 'get' })
    .then((response) => {
      response.text()
        .then((result) => {
          configs = JSON.parse(result).configs
          fillConfigs()
        })
    })
}

const getProducts = () => {
  fetch(url, { method: 'get' })
    .then((response) => {
      response.text()
        .then((result) => {
          products = JSON.parse(result).products
          fillProducts()
        })
    })
}

const fillConfigs = () => {
  document.title = configs.title
  const $fillconfigs = document.querySelector("#configs")
  const confList =
  `<h1>${configs.title}</h1>
  <h2>${configs.subTitle}</h2>
  <p><a :href="">${configs.email}</a></p>
  <p><a :href="">${configs.phone}</a></p>
  <div id="description">
  ${configs.description.map((item) => {
    return item.p ? `<p>${item.p}</p>` : `<h2>${item.h2}</h2>`
  }).join('')}
  </div>`

  $fillconfigs.innerHTML = confList
}

const fillProducts = () => {
  let i = 0
  const $fillProducts = document.querySelector("#products")
  const prodList = products.map((item) => {
    return (
    `<div class="v-${item.active}" id="prod${i++}">
    <h2>${item.name}</h2>
    <img src="${item.image}">
    ${item.description.map((item) => {
      return item.p ? `<p>${item.p}</p>` : `<h4>${item.h4}</h4>`
    }).join('')}
    <h2 id="price">R$ ${item.price},00</h2>
    <button>Comprar</button>
    <button>WhatsApp</button>
    </div>`)
  }).join('')

  $fillProducts.innerHTML = prodList
}

getConfigs()
getProducts()