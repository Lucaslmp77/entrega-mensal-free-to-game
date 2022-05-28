/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE==HOME==*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg  ====MMORPG====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=battle-royale   ====BATTLE ROYALE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports   ====SPORTS====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing   ====RACING====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror   ====HORROR====*/ 

var imagensObj = ["img/home.png", "img/relevancia.png", "img/alfabetica.png", "img/mmo.png", "img/battle.png", "img/sports.png", "img/racing.png", "img/horror.png"];
var nomeObj = ["HOME", "RELEVÂNCIA", "ALFABÉTICA", "MMORPG", "BATTLE ROYALE", "SPORTS", "RACING", "HORROR"];

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

function categorias() {
    for(var i = 0; i < 8; i++){
        const setaSideBar = document.querySelector('.sideBar');
        const criaUl = document.createElement('ul');
        criaUl.setAttribute('class', 'navList');
        setaSideBar.appendChild(criaUl);

        const criaLi = document.createElement('li');
        criaUl.appendChild(criaLi);

        const criaA = document.createElement('a');
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

function sideBar() {
    logo();
    categorias();
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '634d00049amsh9a4631d4d411797p170e5djsndf01e8892ac6'
	}
};

const request = async() => {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity';
    fetch(url, options)
    const dados = await fetch(url);
    const jogos = await dados.json();
    addDez(jogos);
}

var num = 0;

function addDez(jogos) {
    for(var i = 0; i < 9; i++) {
        var jogosTemporarios = jogos[i + num];
        criaCard(jogosTemporarios);
    }
    num += 9;
}

const requestBanner = async() => {
    const pegaUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror';
    fetch(pegaUrl, options)
    const recebeDados = await fetch(pegaUrl);
    const jogosBanner = await recebeDados.json();

    var recebeJogoBanner = jogosBanner[1];
    criaBanner(recebeJogoBanner);
}

function criaBanner(jogosBanner) {
    const setaDiv = document.querySelector('.homeContent');
    const criaBanner = document.createElement('div');
    criaBanner.setAttribute('class', 'galleryBanner');
    criaBanner.style.backgroundImage=`url(${jogosBanner.thumbnail})`;
    setaDiv.insertBefore(criaBanner, carregarMais);
}

function criaCard(jogos) {
    const setaDiv = document.querySelector('.gallery');
    const criaDiv = document.createElement('div');
    criaDiv.setAttribute('class', 'galleryCard');
    setaDiv.appendChild(criaDiv);

    const criaTitle = document.createElement('h2');
    criaTitle.setAttribute('class', 'galleryCardTitle');
    criaTitle.innerHTML = jogos.title;
    criaDiv.appendChild(criaTitle);
    criaDiv.style.backgroundImage=`url(${jogos.thumbnail})`;

    const criaStar = document.createElement('a');
    criaStar.setAttribute('class', 'galleryCardBtn');
    criaStar.innerHTML = '&#10025;';
    criaDiv.appendChild(criaStar);
}

sideBar();
request();
requestBanner();

document.getElementById('carregarMais')
        .addEventListener('click',request);