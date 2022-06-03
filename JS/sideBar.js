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
    var nomeCatObj = ["ancHome", "ancRelevancia", "ancAlfabetica", "ancMmorpg", "ancMoba", "ancCard", "ancStrategy", "ancOpenWorld"];
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
}

export function runSideBar() {
    logo();
    categorias();
}