const URL_TO_FETCH = 'https://diogocezar.github.io/bazar/json/database.json';
fetch(URL_TO_FETCH, {
    method: 'get'
})
.then(function(response){
    response.json().then( (e) => populateHtml(e));
})
.catch(function(err){
    console.error('Failed retrieving information', err);
});

function populateHtml(data){
    populateHeader(data);    
}

function populateHeader(data){
    var infoContainer = document.getElementById('info-container');
    var htmlStringInfo = '';

    htmlStringInfo += "<h2>" + data.configs.subTitle + "</h2>";
    htmlStringInfo += "<p>" + data.configs.email + "</p>";
    htmlStringInfo += "<p>" + data.configs.phone + "</p>";
    htmlStringInfo += "<p>" + data.configs.description[0].p + "</p>";
    htmlStringInfo += "<p>" + data.configs.description[1].p + "</p>";
    htmlStringInfo += "<h2>" + data.configs.description[2].h2 + "</h2>";
    htmlStringInfo += "<p>" + data.configs.description[3].p + "</p>";

    infoContainer.innerHTML = htmlStringInfo;
}
