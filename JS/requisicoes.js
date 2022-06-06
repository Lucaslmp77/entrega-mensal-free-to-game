/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE==HOME==*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg  ====MMORPG====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=moba   ====MOBA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=card   ====CARD GAMES====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy   ====ESTRATÉGIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=open-world   ====OPEN WORLD====*/ 

/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc   ====PC====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser   ====browser====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games   ====ALL====*/ 

/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity   ====PC and POPULARITY====*/ 

//variaveis para consumo da api e carregar mais.
var jogos = [];
var num = 0;

//variavel para jogos temporarios que aparecem na tela
var jogosTemp = [];

//favoritos
var meusFavoritos = [];

var nomeOption = ['optionHome', 'optionRelevancia', 'optionHome', 'optionHome', 'optionHome', 'optionHome', 'optionHome', 'optionHome'];

//objetos requests
var requests = [request];

//remove eventListener dos requests de cada categoria
function removeRequests(nickPage){
    for(var i = 0; i < requests.length; i++){
        if(requests[i] != nickPage){
            document.getElementById('carregarMais')
                .removeEventListener('click',requests[i]);
        }
    }
}

export function plataformLinks(plat, cat) {
    var positionPlat = 0;
    var positionCat = 0;

    var setaAll = document.querySelector(plat);
    setaAll.addEventListener("click", function () {
        if(plat === '.all'){
        positionPlat = 0;
        console.log(positionPlat);
        }
    });
    var setaPc = document.querySelector(plat);
    setaPc.addEventListener("click", function () {
        if(plat === '.pc'){
        positionPlat = 1;
        console.log(positionPlat);
        }
    });
    var setaBrowser = document.querySelector(plat);
    setaBrowser.addEventListener("click", function () {
        if(plat === '.browser'){
        positionPlat = 2;
        console.log(positionPlat);
        }
    });

    var setaHome = document.querySelector(cat);
    setaHome.addEventListener("click", function () {
        if(cat === '.ancHome'){
        positionCat = 0;
        console.log(positionCat);
        }
    });
    var setaRelev = document.querySelector(cat);
    setaRelev.addEventListener("click", function () {
        if(cat === '.ancRelevancia'){
        positionCat = 1;
        console.log(positionCat);
        }
    });
    var setaAlf = document.querySelector(cat);
    setaAlf.addEventListener("click", function () {
        if(cat === '.ancAlfabetica'){
        positionCat = 2;
        console.log(positionCat);
        }
    });
    var setaMmmo = document.querySelector(cat);
    setaMmmo.addEventListener("click", function () {
        if(cat === '.ancMmorpg'){
        positionCat = 3;
        console.log(positionCat);
        }
    });
    var setaMoba = document.querySelector(cat);
    setaMoba.addEventListener("click", function () {
        if(cat === '.ancMoba'){
        positionCat = 4;
        console.log(positionCat);
        }
    });
    var setaCard = document.querySelector(cat);
    setaCard.addEventListener("click", function () {
        if(cat === '.ancCard'){
        positionCat = 5;
        console.log(positionCat);
        }
    });
    var setaStrat = document.querySelector(cat);
    setaStrat.addEventListener("click", function () {
        if(cat === '.ancStrategy'){
        positionCat = 6;
        console.log(positionCat);
        }
    });
    var setaOpenW = document.querySelector(cat);
    setaOpenW.addEventListener("click", function () {
        if(cat === '.ancOpenWorld'){
        positionCat = 7;
        console.log(positionCat);
        }
    });
}

export function sortLinks(plat, cat) {
    var plataform = ['', 'platform=pc&', 'platform=browser&'];
    var category = ['sort-by=popularity', 'sort-by=relevance', 'sort-by=alphabetical', 'category=mmorpg', 'category=moba', 'category=card', 'category=strategy', 'category=open-world'];

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 8; j++){
            var links = `https://free-to-play-games-database.p.rapidapi.com/api/games?${plataform[plat]}${category[cat]}`;
        }
    }
    var url = links;
    console.log(url);
}

export function request() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=open-world ', options)
        .then(response => response.json())
        .then(dados =>{
            var todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
}

/* export function homeClick(){
    let apagaSecao = document.querySelector('.gallery');
    var setaAncora = document.querySelector('.ancHome');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            removeRequests('request');
            request('popularity');
        });
    document.getElementById('carregarMais')
        .addEventListener('click', request);
} */

//Funcao que cria as tags utilizadas em cada card + btn favoritos
function criaCard(jogos) {
    const setaDiv = document.querySelector('.gallery');
    const criaDiv = document.createElement('div');
    criaDiv.setAttribute('class', 'galleryCard');
    setaDiv.appendChild(criaDiv);

    const LinkDojogo = document.createElement('a');
    LinkDojogo.setAttribute('class', 'linkDoJogo');
    LinkDojogo.setAttribute('href', jogos.freetogame_profile_url);
    LinkDojogo.setAttribute('target', '_blank');
    criaDiv.appendChild(LinkDojogo);
    const ImagemDoJogo = document.createElement('img');
    ImagemDoJogo.setAttribute('class', 'imagemJogo');
    ImagemDoJogo.src= jogos.thumbnail;
    LinkDojogo.appendChild(ImagemDoJogo);

    const criaTitle = document.createElement('h2');
    criaTitle.setAttribute('class', 'galleryCardTitle');
    criaTitle.innerHTML = jogos.title;
    criaDiv.appendChild(criaTitle);

    const BotaoFavorito = document.createElement('a');
    BotaoFavorito.setAttribute('class', 'galleryCardBtn');
    BotaoFavorito.setAttribute('onclick', `AddFav(${jogos.id})`);
    BotaoFavorito.innerHTML = '&#10025;';
    criaDiv.appendChild(BotaoFavorito);
}