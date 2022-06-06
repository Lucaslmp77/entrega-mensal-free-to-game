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

//objetos requests
var requests = [requestPopulares, requestRelevancia, requestAlfabetica, requestMmo, requestMoba, requestCard, requestStrategy, requestOpenWorld, requestPc, requestPcRelevance];


function categoriasdoPCeBrowser(){
    var form = document.getElementById('formulario');
    var selecionado2 = document.getElementsByName('selecione');
    var pc2 = document.getElementById('PC2');
    var browser2 = document.getElementById('BROWSER2');
    var mmorpg2 = document.getElementById('MMORPG2');
    var moba2 = document.getElementById('MOBA2');
    var card2 = document.getElementById('CARD2');
    var estrategia2 = document.getElementById('ESTRATEGIA2');
    var openword2 = document.getElementById('OPENWORD2');
    var CategoriaPcMMORPG = []
    var CategoriaPcMoba = []
    var CategoriaPcCard = []
    var CategoriaPcEstrategia = []
    var CategoriaPcOpenword = []
    var CategoriaBrowserMMORPG = []
    var CategoriaBrowserMoba = []
    var CategoriaBrowserCard = []
    var CategoriaBrowserEstrategia = []
    var CategoriaBrowserOpenword = []
    //var TodasCategoriasPC = ['CategoriaPcMMORPG','CategoriaPcMoba','CategoriaPcCard','CategoriaPcOpenword']
    //var TodasCategoriasBrowser = ['CategoriaBrowserMMORPG','CategoriaBrowserMoba','CategoriaBrowserCard','CategoriaBrowserEstrategia']
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
        .then(response => response.json())
        .then(dados =>{

            var todosJogosPC = dados;
            CategoriaPcMMORPG = todosJogosPC.filter(element => element.genre === 'MMORPG');
            CategoriaPcMoba = todosJogosPC.filter(element => element.genre === 'MOBA');
            CategoriaPcCard = todosJogosPC.filter(element => element.genre === 'Card Game');
            CategoriaPcEstrategia = todosJogosPC.filter(element => element.genre === 'Strategy');

        })
    const opcoes = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=open-world', opcoes)
        .then(response => response.json())
        .then(dados =>{CategoriaPcOpenword = dados;})
    const opcoesBrowserPc = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser', opcoesBrowserPc)
        .then(response => response.json())
        .then(dados =>{
            const TodosJogosBrowser = dados;
            CategoriaBrowserMMORPG = TodosJogosBrowser.filter(element => element.genre === 'MMORPG');
            CategoriaBrowserMoba = TodosJogosBrowser.filter(element => element.genre === 'MOBA');
            CategoriaBrowserCard = TodosJogosBrowser.filter(element => element.genre === 'Card Game');
            CategoriaBrowserEstrategia = TodosJogosBrowser.filter(element => element.genre === 'Strategy');
        })
    const opcoesBrowserOpen = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&category=open-world', opcoesBrowserOpen)
        .then(response => response.json())
        .then(dados =>{CategoriaBrowserOpenword = dados;})

    form.addEventListener('submit', function(e){
        if(pc2.selected){
            apagaSecao.innerHTML="";
            removeBtn()
            if(mmorpg2.checked){CategoriaPcMMORPG.forEach((elemento)=>{criaCard(elemento)})}
            if(moba2.checked){CategoriaPcMoba.forEach((elemento)=>{criaCard(elemento)})}
            if(card2.checked){CategoriaPcCard.forEach((elemento)=>{criaCard(elemento)})}
            if(estrategia2.checked){CategoriaPcEstrategia.forEach((elemento)=>{criaCard(elemento)})}
            if(openword2.checked){CategoriaPcOpenword.forEach((elemento)=>{criaCard(elemento)})}
        }else if((pc2.selected) &&((mmorpg2.value === ""))){
            apagaSecao.innerHTML="";
            removeBtn();
            todosJogosPC.forEach((elemento)=>{ console.log(elemento); criaCard(elemento)})
        }
        if(browser2.selected){
            apagaSecao.innerHTML="";
            removeBtn()
            if(mmorpg2.checked){CategoriaBrowserMMORPG.forEach((elemento)=>{criaCard(elemento)})}
            if(moba2.checked){CategoriaBrowserMoba.forEach((elemento)=>{criaCard(elemento)})}
            if(card2.checked){CategoriaBrowserCard.forEach((elemento)=>{criaCard(elemento)})}
            if(estrategia2.checked){CategoriaBrowserEstrategia.forEach((elemento)=>{criaCard(elemento)})}
            if(openword2.checked){CategoriaBrowserOpenword.forEach((elemento)=>{criaCard(elemento)})}
        }else if(browser2.selected){
            apagaSecao.innerHTML="";
            removeBtn();
            TodosJogosBrowser.forEach((elemento)=>{criaCard(elemento)})
        }
        e.preventDefault();
    })
}



//remove eventListener dos requests de cada categoria
function removeRequests(nickPage){
    for(var i = 0; i < requests.length; i++){
        if(requests[i] != nickPage){
            document.getElementById('carregarMais')
                .removeEventListener('click',requests[i]);
        }
    }
}

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
    const setaHomeContent = document.getElementById('body')
    const criaNav = document.createElement('nav');
    criaNav.setAttribute('class', 'headerNav');
    setaHomeContent.appendChild(criaNav);
    const criaDiv1 = document.createElement('div');
    criaDiv1.setAttribute('class','ancorasDiv');
    criaNav.appendChild(criaDiv1)
    for(var i = 0; i < 4; i++){
        const criaA = document.createElement('a');
        criaA.setAttribute('class', headerObj[i]);
        criaA.appendChild(document.createTextNode(headerObj[i]));
        criaDiv1.appendChild(criaA);
        if(i == 3){
            criaA.setAttribute('onclick', 'favorite()');
        }
    }
    const criaForm = document.createElement('form');
    criaForm.setAttribute('id', 'formulario');
    criaNav.appendChild(criaForm);
    const criaDivCats = document.createElement('div');
    criaDivCats.setAttribute('class','divCategorias')
    criaForm.appendChild(criaDivCats);
    const criaDiv2 = document.createElement('div');
    criaDiv2.setAttribute('class','divOptions');
    criaDivCats.appendChild(criaDiv2);
    const criaLabel = document.createElement('label');
    criaLabel.innerHTML="Plataforma: ";
    criaDiv2.appendChild(criaLabel);
    const criaSelect = document.createElement('select');
    criaSelect.setAttribute('id','selecione5');
    criaSelect.setAttribute('name', 'selecione');
    criaDiv2.appendChild(criaSelect);
    const criaOption = document.createElement('option');
    criaOption.setAttribute('name','selecione');
    criaOption.setAttribute('selected','')
    criaOption.setAttribute('disabled','')
    criaOption.innerHTML="Selecione a plataforma";
    criaSelect.appendChild(criaOption);
    const criaOption2 = document.createElement('option');
    criaOption2.setAttribute('name','selecione');
    criaOption2.setAttribute('id','PC2');
    criaOption2.setAttribute('value','1');
    criaOption2.innerHTML="PC";
    criaSelect.appendChild(criaOption2)
    const criaOption3 = document.createElement('option');
    criaOption3.setAttribute('name','selecione');
    criaOption3.setAttribute('id','BROWSER2');
    criaOption3.setAttribute('value','2');
    criaOption3.innerHTML="BROWSER";
    criaSelect.appendChild(criaOption3);
    const criaDiv3 = document.createElement('div');
    criaDiv3.setAttribute('class','divCheckboxs')
    criaDivCats.appendChild(criaDiv3);
    const criaLabel2 = document.createElement('label');
    criaLabel2.innerHTML="Selecione a categoria: ";
    criaDiv3.appendChild(criaLabel2);
    const criaDiv4 = document.createElement('div');
    criaDiv3.appendChild(criaDiv4);
    const criaInput = document.createElement('input');
    criaInput.setAttribute('type','checkbox');
    criaInput.setAttribute('id','MMORPG2');
    criaInput.setAttribute('value','1');
    criaDiv4.appendChild(criaInput);
    const criaLabel3 = document.createElement('label');
    criaLabel3.setAttribute('for','MMORPG2');
    criaLabel3.innerHTML="MMORPG"
    criaDiv4.appendChild(criaLabel3);
    const criaDiv5 = document.createElement('div');
    criaDiv3.appendChild(criaDiv5);
    const criaInput2 = document.createElement('input');
    criaInput2.setAttribute('type','checkbox');
    criaInput2.setAttribute('id','MOBA2');
    criaDiv5.appendChild(criaInput2);
    const criaLabel4 = document.createElement('label');
    criaLabel4.setAttribute('for','MOBA2');
    criaLabel4.innerHTML="MOBA"
    criaDiv5.appendChild(criaLabel4);
    const criaDiv6 = document.createElement('div');
    criaDiv3.appendChild(criaDiv6);
    const criaInput3 = document.createElement('input');
    criaInput3.setAttribute('type','checkbox');
    criaInput3.setAttribute('id','CARD2');
    criaDiv6.appendChild(criaInput3);
    const criaLabel5 = document.createElement('label');
    criaLabel5.setAttribute('for','CARD2');
    criaLabel5.innerHTML="CARD"
    criaDiv6.appendChild(criaLabel5);
    const criaDiv7 = document.createElement('div');
    criaDiv3.appendChild(criaDiv7);
    const criaInput4 = document.createElement('input');
    criaInput4.setAttribute('type','checkbox');
    criaInput4.setAttribute('id','ESTRATEGIA2');
    criaDiv7.appendChild(criaInput4);
    const criaLabel6 = document.createElement('label');
    criaLabel6.setAttribute('for','ESTRATEGIA2');
    criaLabel6.innerHTML="Estratégia"
    criaDiv7.appendChild(criaLabel6);
    const criaDiv8 = document.createElement('div');
    criaDiv3.appendChild(criaDiv8);
    const criaInput5 = document.createElement('input');
    criaInput5.setAttribute('type','checkbox');
    criaInput5.setAttribute('id','OPENWORD2');
    criaDiv8.appendChild(criaInput5);
    const criaLabel7 = document.createElement('label');
    criaLabel7.setAttribute('for','OPENWORD2');
    criaLabel7.innerHTML="Open Word"
    criaDiv8.appendChild(criaLabel7);
    const criaBotao = document.createElement('input');
    criaBotao.setAttribute('type','submit');
    criaBotao.setAttribute('value','FILTRAR');
    criaBotao.setAttribute('class','FILTRAR');
    criaForm.appendChild(criaBotao);
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
            removeRequests('requestPopulares');
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
            removeRequests('requestRelevancia');
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
            removeRequests('requestAlfabetica');
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
            removeRequests('requestMmo');
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
        removeRequests('requestMoba');
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
        removeRequests('requestCard');
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
        removeRequests('requestStrategy');
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
            console.log("open",todosJogos);
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
        removeRequests('requestOpenWorld');
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

    const plataEgenero = document.createElement('div');
    plataEgenero.setAttribute('class', 'platagenero');
    criaDiv.appendChild(plataEgenero);

    const genero = document.createElement('p');
    genero.setAttribute('class', 'genero');
    genero.innerHTML = jogos.genre;
    plataEgenero.appendChild(genero);

    const desenvolvedor = document.createElement('p');
    desenvolvedor.setAttribute('class', 'desenvolvedor');
    desenvolvedor.innerHTML = jogos.developer;
    plataEgenero.appendChild(desenvolvedor)

    const plataforma = document.createElement('div');
    plataforma.setAttribute('class', jogos.platform)
    plataEgenero.appendChild(plataforma);
    const BotaoFavorito = document.createElement('a');
    BotaoFavorito.setAttribute('class', 'galleryCardBtn');
    BotaoFavorito.setAttribute('onclick', `AddFav(${jogos.id})`);
    BotaoFavorito.setAttribute('id', jogos.id)
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

    console.log(!!meusFavoritos.find(element => element.id === jogoClicado.id))
    // varifica se ja tem o jogo na lista de favoritos.
    if(!!meusFavoritos.find(element => element.id === jogoClicado.id)) {
        //remover o brilho da estrela.
        const DelBrilhaEstrela = document.getElementById(`${jogoClicado.id}`)
        DelBrilhaEstrela.style.color = "cadetblue"
        DelBrilhaEstrela.style.filter = ""
        meusFavoritos = meusFavoritos.filter(element => element.id !== jogoClicado.id);
        return;
    };
    const brilhaEstrela = document.getElementById(`${jogoClicado.id}`)
    brilhaEstrela.style.color = "red"
    brilhaEstrela.style.filter = "brightness(100)"
    console.log("Jogo clicado",jogoClicado)
    meusFavoritos.push(jogoClicado)
    console.log("MEUS_FAVORITOS: ",meusFavoritos);
}

//Funcao da sidebar (logo + categorias)
function sideBar() {
    logo();
    categorias();
}

function requestPc() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=popularity', options)
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
    const selecionanav = document.querySelector('.headerNav')
    let criaelement = document.createElement("fieldset")
    criaelement.setAttribute('class', 'fieldset')
    selecionanav.appendChild(criaelement)
    const crialegend=document.createElement('legend')
    crialegend.innerHTML = "Seleciona um gênero em PC"
    criaelement.appendChild(crialegend)
    nomeObj.forEach((categoria) =>{
        const criadiv = document.createElement('div')
        criaelement.appendChild(criadiv)
        const criainput = document.createElement('input')
        criainput.setAttribute('type', 'radio')
        criainput.setAttribute('id', categoria)
        criainput.setAttribute('name', 'caixa')
        criadiv.appendChild(criainput)
        const crialabel = document.createElement('label')
        crialabel.setAttribute('for', categoria)
        crialabel.innerHTML = categoria
        criadiv.appendChild(crialabel)
    })
        document.getElementById('carregarMais')
            .addEventListener('click',requestPc);
    const check = document.getElementById('ESTRATEGIA')
    check.addEventListener('click', () =>{
        requestPcRelevance()
    })
}

//funcao que executa o conteudo da categoria home (quando clicada)
function pcClick(){
    var setaAncora = document.querySelector('.PC');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            removeRequests('requestPc');
            requestPc();
        });
}

function requestPcRelevance() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=relevance', options)
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
            .addEventListener('click',requestPcRelevance);
}

//funcao que executa o conteudo da categoria home (quando clicada)
function pcRelevanceClick(){
    var setaAncora = document.querySelector('.ancRelevancia');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = '';
            num = 0;
            removeRequests('requestPcRelevance');
            requestPcRelevance();
        });
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

pcClick();
pcRelevanceClick();
categoriasdoPCeBrowser()