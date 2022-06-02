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

/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=popularity   ====PC and POPULARITY====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=relevance   ====PC and RELEVANCE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=alphabetical   ====PC and ALPHABETICAL====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=mmorpg   ====PC and MMORPG====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=moba   ====PC and MOBA====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=card   ====PC and CARD====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=strategy   ====PC and STRATEGY====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=PC&category=open-world   ====PC and OPEN WORLD====*/

/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=popularity   ====BROWSER and POPULARITY====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=relevance   ====BROWSER and RELEVANCE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=alphabetical   ====BROWSER and ALPHABETICAL====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=mmorpg   ====BROWSER and MMORPG====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=moba   ====BROWSER and MOBA====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=card   ====BROWSER and CARD====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=strategy   ====BROWSER and STRATEGY====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=open-world   ====BROWSER and OPEN WORLD====*/


//variaveis para consumo da api e carregar mais.
var jogos = [];
var num = 0;

//variavel para jogos temporarios que aparecem na tela
var jogosTemp = [];

//limpa tela
let apagaSecao = document.querySelector('.gallery');

//favoritos
var meusFavoritos = [];

//objetos sidebar
var imagensObj = ["img/home.png", "img/relevancia.png", "img/alfabetica.png", "img/mmo.png", "img/battle.png", "img/card.png", "img/strategy.png", "img/openworld.png"];
var nomeObj = ["HOME", "RELEVÂNCIA", "ALFABÉTICA", "MMORPG", "MOBA", "CARD", "ESTRATEGIA", "OPEN WORLD"];

//objetos header
var headerObj = ["PC", "Browser", "All", "Favoritos"];

//classes categorias
var nomeCatObj = ["ancHome", "ancRelevancia", "ancAlfabetica", "ancMmorpg", "ancMoba", "ancCard", "ancStrategy", "ancOpenWorld"];

//remove botao carregar mais
function removeBtn() {
    var recebeClass = document.querySelector('.removeBotao');
    recebeClass.style.display = 'none';
}

//remove banner
function removeBanner() {
    var recebeClass = document.querySelector('.galleryBanner');
    recebeClass.style.display = 'none';
}

//funcao para criacao do logo no html
function logo() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaLogoContent = document.createElement('div');
    criaLogoContent.setAttribute('class', 'logoContent');
    setaSideBar.appendChild(criaLogoContent);

    const setaLogoContent = document.querySelector('.logoContent');
    const criaLogo = document.createElement('div');
    criaLogo.setAttribute('class', 'logo');
    setaLogoContent.appendChild(criaLogo);

    const setaLogo = document.querySelector('.logo');
    const criaImgLogo = document.createElement('img');
    criaImgLogo.src = "img/logo.png";
    setaLogo.appendChild(criaImgLogo);

    const criaH1Logo = document.createElement('h1');
    criaH1Logo.setAttribute('class', 'logoName');
    criaH1Logo.appendChild(document.createTextNode("SÓ A NATA"));
    setaLogo.appendChild(criaH1Logo);
}

//funcao para criacao das categorias na sidebar
function categorias() {
    for(var i = 0; i < 8; i++){
        const setaSideBar = document.querySelector('.sideBar');
        const criaUl = document.createElement('ul');
        criaUl.setAttribute('class', 'navList');
        setaSideBar.appendChild(criaUl);

        const criaLi = document.createElement('li');
        criaUl.appendChild(criaLi);

        const criaA = document.createElement('a');
        criaA.setAttribute('class', nomeCatObj[i]);
        criaLi.appendChild(criaA);

        const criaImgA = document.createElement('img');
        criaImgA.src = (imagensObj[i]);
        criaA.appendChild(criaImgA);

        const criaSpanA = document.createElement('span');
        criaSpanA.setAttribute('class', 'linksName');
        criaSpanA.appendChild(document.createTextNode(nomeObj[i]));
        criaA.appendChild(criaSpanA);
    }
}

//funcao para criacao do header (menu nav)
function header() {
    const setaHomeContent = document.querySelector('.homeContent');
    const criaNav = document.createElement('nav');
    criaNav.setAttribute('class', 'headerNav');
    setaHomeContent.insertBefore(criaNav, carregarMais);
    for(var i = 0; i < 4; i++){
        const criaA = document.createElement('a');
        criaA.setAttribute('class', 'ancorasHeader');
        criaA.appendChild(document.createTextNode(headerObj[i]));
        criaNav.appendChild(criaA);
        if(i == 3){
            criaA.setAttribute('onclick', 'favorite()');
        }
    }
}

//funcao que consome a api da categoria populares
function requestPopulares() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestPopulares);
}

//funcao que executa o conteudo da categoria home (quando clicada)
function homeClick(){
    var setaAncora = document.querySelector('.ancHome');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            document.getElementById('carregarMais')
                .removeEventListener('click',requestRelevancia);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestAlfabetica);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestMmo);
            
            document.getElementById('carregarMais')
                .removeEventListener('click',requestMoba);

            document.getElementById('carregarMais')
                .removeEventListener('click',ca);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestStrategy);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestOpenWorld);

            requestPopulares();
        });
}

//funcao que consome a api da categoria relevancia
function requestRelevancia() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestRelevancia);
}

//funcao que executa o conteudo da categoria relevancia (quando clicada)
function relevanciaClick(){
    var setaAncora = document.querySelector('.ancRelevancia');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            document.getElementById('carregarMais')
                .removeEventListener('click',requestPopulares);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestAlfabetica);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestMmo);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestMoba);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestCard);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestStrategy);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestOpenWorld);

            requestRelevancia();
        });
}

//funcao que consome a api da categoria alfabetica
function requestAlfabetica() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestAlfabetica);
}

//funcao que executa o conteudo da categoria alfabetica (quando clicada)
function alfabeticaClick(){
    var setaAncora = document.querySelector('.ancAlfabetica');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            document.getElementById('carregarMais')
                .removeEventListener('click',requestPopulares);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestRelevancia);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestMmo);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestMoba);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestCard);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestStrategy);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestOpenWorld);

            requestAlfabetica();
        });
}

//funcao que consome a api da categoria mmorpg
function requestMmo() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestMmo);
}

//funcao que executa o conteudo da categoria mmorpg (quando clicada)
function mmoClick(){
    var setaAncora = document.querySelector('.ancMmorpg');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            document.getElementById('carregarMais')
                .removeEventListener('click',requestPopulares);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestRelevancia);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestAlfabetica);
            
            document.getElementById('carregarMais')
                .removeEventListener('click',requestMoba);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestCard);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestStrategy);

            document.getElementById('carregarMais')
                .removeEventListener('click',requestOpenWorld);

            requestMmo();
        });
}

//funcao que executa o conteudo da categoria MOBA
function requestMoba(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=moba', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) =>{
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestMoba);
}

//funcao que executa o conteudo da categoria MOBA (quando clicada)
function mobaClick(){
    var setaAncora = document.querySelector('.ancMoba');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText= "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;
        document.getElementById('carregarMais')
            .removeEventListener('click',requestPopulares);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestRelevancia);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestAlfabetica);
        
        document.getElementById('carregarMais')
            .removeEventListener('click',requestMmo);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestCard);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestStrategy);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestOpenWorld);

        requestMoba();
    });
}

//funcao que executa o conteudo da categoria Card Games
function requestCard(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=card', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) =>{
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestCard);
}

//funcao que executa o conteudo da categoria Card Games (quando clicada)
function cardClick(){
    var setaAncora = document.querySelector('.ancCard');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText= "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;
        document.getElementById('carregarMais')
            .removeEventListener('click',requestPopulares);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestRelevancia);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestAlfabetica);
        
        document.getElementById('carregarMais')
            .removeEventListener('click',requestMmo);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestMoba);
            
        document.getElementById('carregarMais')
            .removeEventListener('click',requestStrategy);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestOpenWorld);

        requestCard();
    });
}

//funcao que executa o conteudo da categoria Estratégia
function requestStrategy(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=strategy', options)
        .then(response => response.json())
        .then(dados =>{

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) =>{
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestStrategy);
}

//funcao que executa o conteudo da categoria Estratégia (quando clicada)
function strategyClick(){
    var setaAncora = document.querySelector('.ancStrategy');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText= "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;

        document.getElementById('carregarMais')
            .removeEventListener('click',requestPopulares);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestRelevancia);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestAlfabetica);
        
        document.getElementById('carregarMais')
            .removeEventListener('click',requestMmo);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestMoba);
        
        document.getElementById('carregarMais')
            .removeEventListener('click',requestCard);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestOpenWorld);

        requestStrategy();
    });
}

//funcao que executa o conteudo da categoria Open World
function requestOpenWorld(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=open-world', options)
        .then(response => response.json())
        .then(dados => {

            todosJogos = dados;
            console.log(todosJogos);
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
        document.getElementById('carregarMais')
            .addEventListener('click',requestOpenWorld);
}

//funcao que executa o conteudo da categoria Open World (quando clicada)
function openWorldClick(){
    var setaAncora = document.querySelector('.ancOpenWorld');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText = "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;

        document.getElementById('carregarMais')
            .removeEventListener('click',requestPopulares);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestRelevancia);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestAlfabetica);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestMmo);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestMoba);

        document.getElementById('carregarMais')
            .removeEventListener('click',requestCard);
        
        document.getElementById('carregarMais')
            .removeEventListener('click',requestStrategy);

        requestOpenWorld();
    })
}

//Funcao que consome a categoria que sera visualizada no banner
const requestBanner = async() => {
    const optionsBanner = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '634d00049amsh9a4631d4d411797p170e5djsndf01e8892ac6'
        }
    };
    const pegaUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=open-world';
    fetch(pegaUrl, optionsBanner)
    const recebeDados = await fetch(pegaUrl);
    const jogosBanner = await recebeDados.json();

    var recebeJogoBanner = jogosBanner[1];
    criaBanner(recebeJogoBanner);
}

//Funcao que cria as tags do banner e insere a imagem retornada da api
function criaBanner(jogosBanner) {
    const setaDiv = document.querySelector('.homeContent');
    const criaBanner = document.createElement('div');
    criaBanner.setAttribute('class', 'galleryBanner');
    criaBanner.style.backgroundImage=`url(${jogosBanner.thumbnail})`;
    setaDiv.insertBefore(criaBanner, carregarMais);
}

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

//Funcao favoritos
function favorite(){
    removeBtn();
    removeBanner();

    var recebeClass = document.querySelector('.gallery');
    recebeClass.style.marginTop = '7rem';

    apagaSecao.innerText= ""
    meusFavoritos.forEach((elemento) => {
        criaCard(elemento);
    })
}

//Funcao que adiciona o jogo aos favoritos e verifica se nao e repetido
function AddFav(idDoJogo){
    var jogoClicado = jogosTemp.find(element => element.id === idDoJogo)
    console.log("Jogo clicado",jogoClicado)
    meusFavoritos.push(jogoClicado)
    meusFavoritos = meusFavoritos.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))
    console.log("MEUS_FAVORITOS: ",meusFavoritos);
}

//Funcao da sidebar (logo + categorias)
function sideBar() {
    logo();
    categorias();
}

sideBar();
header();

requestBanner();

requestPopulares();
homeClick();

relevanciaClick();

alfabeticaClick();

mmoClick();

mobaClick();

cardClick();

strategyClick();

openWorldClick();