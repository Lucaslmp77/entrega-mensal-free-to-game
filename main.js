/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE==HOME==*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg  ====MMORPG====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=battle-royale   ====BATTLE ROYALE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports   ====SPORTS====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing   ====RACING====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror   ====HORROR====*/ 

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
    criaH1Logo.appendChild(document.createTextNode("TROJAO"));
    setaLogo.appendChild(criaH1Logo);
}

function home() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("HOME"));
    criaA.appendChild(criaSpanA);
}

function relevancia() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("RELEVÂNCIA"));
    criaA.appendChild(criaSpanA);
}

function alfabetica() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("ALFABÉTICA"));
    criaA.appendChild(criaSpanA);
}

function mmorpg() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("MMORPG"));
    criaA.appendChild(criaSpanA);
}

function battleRoyale() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("BATTLE ROYALE"));
    criaA.appendChild(criaSpanA);
}

function sports() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("SPORTS"));
    criaA.appendChild(criaSpanA);
}

function racing() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("RACING"));
    criaA.appendChild(criaSpanA);
}

function horror() {
    const setaSideBar = document.querySelector('.sideBar');
    const criaUl = document.createElement('ul');
    criaUl.setAttribute('class', 'navList');
    setaSideBar.appendChild(criaUl);

    const criaLi = document.createElement('li');
    criaUl.appendChild(criaLi);

    const criaA = document.createElement('a');
    criaLi.appendChild(criaA);

    const criaImgA = document.createElement('img');
    criaImgA.src = "img/home.png"
    criaA.appendChild(criaImgA);

    const criaSpanA = document.createElement('span');
    criaSpanA.setAttribute('class', 'linksName');
    criaSpanA.appendChild(document.createTextNode("HORROR"));
    criaA.appendChild(criaSpanA);
}

function sideBar() {
    logo();
    home();
    relevancia();
    alfabetica();
    mmorpg();
    battleRoyale();
    sports();
    racing();
    horror();
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
		'X-RapidAPI-Key': '634d00049amsh9a4631d4d411797p170e5djsndf01e8892ac6'
	}
};

const request = async() => {
    sideBar();
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity';
    fetch(url, options)
    const dados = await fetch(url);
    const jogos = await dados.json();
    console.log(jogos);
    addDez(jogos);
}

request();

var num = 0;

function addDez(jogos) {
    for(var i = 0; i < 10; i++) {
        var jogosTemporarios = jogos[i + num];
        criaCard(jogosTemporarios);
    }
    num += 10;
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

document.getElementById('carregarMais')
        .addEventListener('click',request);