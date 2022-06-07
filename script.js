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
//objetos requests
var requests = [requestPopulares, requestRelevancia, requestAlfabetica, requestMmo, requestMoba, requestCard, requestStrategy, requestOpenWorld, requestPc, requestPcRelevance];

//variaveis de jogos
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
var todosJogosPC = []
var TodosJogosBrowser = []

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

            todosJogosPC = dados;
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
            TodosJogosBrowser = dados;
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
            if(mmorpg2.checked){CategoriaPcMMORPG.forEach((elemento)=>{ criaCard(elemento)})}
            if(moba2.checked){CategoriaPcMoba.forEach((elemento)=>{criaCard(elemento)})}
            if(card2.checked){CategoriaPcCard.forEach((elemento)=>{criaCard(elemento)})}
            if(estrategia2.checked){CategoriaPcEstrategia.forEach((elemento)=>{criaCard(elemento)})}
            if(openword2.checked){CategoriaPcOpenword.forEach((elemento)=>{criaCard(elemento)})}
        }
        if(browser2.selected){
            apagaSecao.innerHTML="";
            removeBtn()
            if(mmorpg2.checked){CategoriaBrowserMMORPG.forEach((elemento)=>{criaCard(elemento)})}
            if(moba2.checked){CategoriaBrowserMoba.forEach((elemento)=>{criaCard(elemento)})}
            if(card2.checked){CategoriaBrowserCard.forEach((elemento)=>{criaCard(elemento)})}
            if(estrategia2.checked){CategoriaBrowserEstrategia.forEach((elemento)=>{criaCard(elemento)})}
            if(openword2.checked){CategoriaBrowserOpenword.forEach((elemento)=>{criaCard(elemento)})}
        }
        e.preventDefault();
    })
}

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
            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
        })
    document.getElementById('carregarMais')
        .addEventListener('click',requestPopulares);
}

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
    event.target = idDoJogo
    console.log(event.target)
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

//remove eventListener dos requests de cada categoria
function removeRequests(nickPage){
    for(var i = 0; i < requests.length; i++){
        if(requests[i] !== nickPage){
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

requestBanner();
requestPopulares();
homeClick();
relevanciaClick();
alfabeticaClick();
mmoClick();
mobaClick();
cardClick();
//strategyClick();
openWorldClick();
pcClick();
pcRelevanceClick();
categoriasdoPCeBrowser()