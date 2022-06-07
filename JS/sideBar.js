import {
    request
} from './requisicoes.js'

function createSideBar() {
    const setaBody = document.querySelector('body');
    const criaDiv = document.createElement('div');
    criaDiv.setAttribute('class', 'sideBar');
    setaBody.appendChild(criaDiv);
}

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
    var imagensObj = ["img/home.png", "img/relevancia.png", "img/alfabetica.png", "img/mmo.png", "img/battle.png", "img/card.png", "img/strategy.png", "img/openworld.png"];
    var nomeCatObj = ["ancHome active", "ancRelevancia", "ancAlfabetica", "ancMmorpg", "ancMoba", "ancCard", "ancStrategy", "ancOpenWorld"];
    var nomeObj = ["HOME", "RELEVÂNCIA", "ALFABÉTICA", "MMORPG", "MOBA", "CARD", "ESTRATEGIA", "OPEN WORLD"];
    
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
    let seta = document.querySelectorAll('li a');
    seta.forEach(a => {
        a.addEventListener('click', function () {
            seta.forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            if(a.classList.value === 'ancHome active'){
                let apagaSecao = document.querySelector('.gallery');
                setCategory = 'sort-by=popularity';
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancRelevancia active'){
                setCategory = 'sort-by=relevance';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancAlfabetica active'){
                setCategory = 'sort-by=alphabetical';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancMmorpg active'){
                setCategory = 'category=mmorpg';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancMoba active'){
                setCategory = 'category=moba';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancCard active'){
                setCategory = 'category=card';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancStrategy active'){
                setCategory = 'category=strategy';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            else if(a.classList.value === 'ancOpenWorld active'){
                setCategory = 'category=open-world';
                let apagaSecao = document.querySelector('.gallery');
                apagaSecao.innerText= ""
                console.log(setCategory);
            }
            var url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${setCategory}`;
            request(url);
        });
    });
}

var setCategory;

export function runSideBar() {
    createSideBar();
    logo();
    categorias();
}