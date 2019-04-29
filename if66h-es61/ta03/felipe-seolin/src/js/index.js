const $body = document.querySelector('body')
axios_call();


function axios_call(url = "https://diogocezar.github.io/bazar/json/database.json") {
    axios
        .get(url)
        .then(result => {
            const data = JSON.parse(JSON.stringify(result));
            readData(data);
            // Changes the title of the page
            document.title = data.data.configs.title;
        })
        .catch(error => {
            // Print the error  
            console.log(error);
            console.log('Utilizando arquivo local para pegar informações...');
            // if CONNECTION ERROR, get the data from info.json
            axios_call("./src/json/info.json");
        });
}

function readData(data) {

    const siteData = data.data;
    addInfo(siteData);
}

function addInfo(data) {
    // Changes de title of navbar
    const $navbar = document.querySelector('nav');
    $navbar.querySelector('#title').innerHTML = data.configs.title;
    // add info at HTML
    addProductsAndCarouselImages(data);
    addSiteWelcome(data);
    addContacts(data);
}

function addSiteWelcome(data) {
    // Add welcome
    const $carousel = document.querySelector('#carousel');

    let siteWelcome = `
        <div class="main-text hidden-xs hidden-sm">
            <div class="col-md-12 text-center">
                <h1>${ data.configs.title }</h1>
                <h2>${ data.configs.subTitle }</h2>
    `;

    data.configs.description.map(description => {
        if (description.p) {
            siteWelcome += `<p>${ description.p }</p>`;
        } else if (description.h2) {
            siteWelcome += `<h2>${ description.h2 }</h2>`;
        } else if (description.span) {
            siteWelcome += `<span>${ description.span }</span>`;
        } else if (description.h3) {
            siteWelcome += `<h3>${ description.h3 }</h3>`;
        } else if (description.h4) {
            siteWelcome += `<h4>${ description.h4 }</h4>`;
        }
    });

    siteWelcome +=
        `
            </div>
        </div>
        `;
    // Add at the HTML
    $carousel.insertAdjacentHTML('beforeend', siteWelcome);
}

function addProductsAndCarouselImages(data) {
    //Add cards
    const $carousel = document.querySelector('#carousel');
    const $productsContainer = document.querySelector('#products .container-fluid');

    let carouselInner = '<div class="carousel-inner">';
    let cardContainer = '<div id="card-container" class="card-columns"> ';

    let acc = 0;

    data.products.map(product => {
        const active = product.active;

        // Add Carousel itens
        if (active) {
            carouselInner += `
            <div class = "carousel-item ${ acc === 0 ? 'active' : ''}">
                <img src="${product.image}" alt="${product.name}" class="d-block w-100" />
            </div>
        `;
        }

        // Add cards
        cardContainer +=
            `
            <div class="card ${active ? '' : ' card-disabled'}">
                <div class="card-header">
                    <h3 class = "card-title">
                        ${ product.name }
                    </h3> 
                </div>
                <img src = "${ product.image }" class = "card-img-top" alt = "${ product.name }" >
                <div class = "card-body">
                    
                    <div class = "card-text"> 
            `;

        product.description.map(description => {
            if (description.h4) {
                cardContainer += `<h4> ${ description.h4 } </h4>`;
            } else if (description.p) {
                cardContainer += `<p> ${ description.p } </p>`;
            }
        });


        cardContainer +=
            `
                        <h4>R$ ${ product.price },00</h4>
                    </div> 
                    <a class="btn btn-${active ? 'primary': 'secondary'} form-control" type="button" ${active ? '' : 'disabled="disabled"'}
                        href="
                        mailto:${ data.configs.email }?subject=${ data.configs.subject }${ product.name }&body=${ data.configs.bodyMail} ${ product.name} por R$ ${ product.price},00.
                            ">
                            ${ active ? 'Comprar': 'Vendido'}
                     </a>
                </div>
            </div>
        `;

        acc++;
    });

    carouselInner += '</div>'
    $carousel.insertAdjacentHTML('afterbegin', carouselInner);

    cardContainer += '</div>';
    $productsContainer.insertAdjacentHTML('beforeend', cardContainer);
}

function addContacts(data) {
    // Add contacts
    const $contact = document.querySelector('#contact .container-fluid .row');
    let contacts = `
        <div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>Telefone</h4>
            <p>
                <a href="tel:${ data.configs.phone }">
                    ${ data.configs.phone }
                </a>
            </p>
        </div>
        <div class = "col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h4>E-mail</h4>
            <p>
                <a href = "mailto:${ data.configs.email }?subject=${ data.configs.subject }">
                    ${ data.configs.email }
                </a>
            </p>
        </div
    `;
    $contact.insertAdjacentHTML('beforeend', contacts);
}