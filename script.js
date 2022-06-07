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
var requests = [requestPopulares, requestRelevancia, requestAlfabetica, requestMmo, requestMoba, requestCard, requestStrategy, requestOpenWorld, RequestBrowser, RequestPc, RequestAll];

let count = 1;

//variaveis categorias para pc
var CategoriaPcPopulares = []
var CategoriaPcRelevancia = []
var CategoriaPcAlfabetica = []
var CategoriaPcMMORPG = []
var CategoriaPcMoba = []
var CategoriaPcCard = []
var CategoriaPcEstrategia = []
var CategoriaPcOpenword = []
//variaveis categorias para browser
var CategoriaBrowserPopulares = []
var CategoriaBrowserRelevancia = []
var CategoriaBrowserAlfabetica = []
var CategoriaBrowserMMORPG = []
var CategoriaBrowserMoba = []
var CategoriaBrowserCard = []
var CategoriaBrowserEstrategia = []
var CategoriaBrowserOpenword = []
//variaveis plataformas
var todosJogosPC = []
var TodosJogosBrowser = []
var AllApi = []

function categoriasdoPCeBrowser(){
    var form = document.getElementById('formulario');
    var pc2 = document.getElementById('PC2');
    var browser2 = document.getElementById('BROWSER2');
    var mmorpg2 = document.getElementById('MMORPG2');
    var moba2 = document.getElementById('MOBA2');
    var card2 = document.getElementById('CARD2');
    var estrategia2 = document.getElementById('ESTRATEGIA2');
    var openword2 = document.getElementById('OPENWORD2');

    var setaPopular = document.getElementById('POPULAR');
    var setaRelevance = document.getElementById('RELEVANCE');
    var setaAlfabet = document.getElementById('ALFABET');

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
    const all = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', all)
        .then(response => response.json())
        .then(dados =>{AllApi = dados;})

    const opcoesPcPopularity = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity', opcoesPcPopularity)
    .then(response => response.json())
    .then(dados =>{CategoriaPcPopulares = dados;})

    const opcoesPcRelevance = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=relevance', opcoesPcRelevance)
    .then(response => response.json())
    .then(dados =>{CategoriaPcRelevancia = dados;})

    const opcoesPcAlfabet = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=alphabetical', opcoesPcAlfabet)
    .then(response => response.json())
    .then(dados =>{CategoriaPcAlfabetica = dados;})

    /* -------------------------------------------------------------------------------------------------------------------------- */

    const opcoesBrowserPopularity = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity', opcoesBrowserPopularity)
    .then(response => response.json())
    .then(dados =>{CategoriaBrowserPopulares = dados;})

    const opcoesBrowserRelevance = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=relevance', opcoesBrowserRelevance)
    .then(response => response.json())
    .then(dados =>{CategoriaBrowserRelevancia = dados;})

    const opcoesBrowserAlfabet = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=alphabetical', opcoesBrowserAlfabet)
    .then(response => response.json())
    .then(dados =>{CategoriaBrowserAlfabetica = dados;})
    
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

            if(setaPopular.checked){CategoriaPcPopulares.forEach((elemento)=>{ criaCard(elemento)})}
            if(setaRelevance.checked){CategoriaPcRelevancia.forEach((elemento)=>{ criaCard(elemento)})}
            if(setaAlfabet.checked){CategoriaPcAlfabetica.forEach((elemento)=>{ criaCard(elemento)})}
            if(mmorpg2.checked){CategoriaPcMMORPG.forEach((elemento)=>{ criaCard(elemento)})}
            if(moba2.checked){CategoriaPcMoba.forEach((elemento)=>{criaCard(elemento)})}
            if(card2.checked){CategoriaPcCard.forEach((elemento)=>{criaCard(elemento)})}
            if(estrategia2.checked){CategoriaPcEstrategia.forEach((elemento)=>{criaCard(elemento)})}
            if(openword2.checked){CategoriaPcOpenword.forEach((elemento)=>{criaCard(elemento)})}
        }
        if(browser2.selected){
            apagaSecao.innerHTML="";
            removeBtn()
            if(setaPopular.checked){CategoriaBrowserPopulares.forEach((elemento)=>{criaCard(elemento)})}
            if(setaRelevance.checked){CategoriaBrowserRelevancia.forEach((elemento)=>{criaCard(elemento)})}
            if(setaAlfabet.checked){CategoriaBrowserAlfabetica.forEach((elemento)=>{criaCard(elemento)})}
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

            jogosTemp = dados.slice(0+num, 9+num)
            jogosTemp.forEach((elemento) =>{
                criaCard(elemento);
                num++
            })
        })
    document.getElementById('carregarMais')
        .addEventListener('click',requestStrategy);
}

//funcao que executa o conteudo da categoria estrategia (quando clicada)
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
    var jogoClicado = AllApi.find(element => element.id === idDoJogo)
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
    meusFavoritos.push(jogoClicado)
}

function AllClick(){
    var setaAncora = document.querySelector('.All');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText= "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;
        removeRequests('RequestAll');
        RequestAll()
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
function RequestAll(){
    var jogosTempApi = []
    jogosTempApi = AllApi.slice(0+num, 9+num)
    jogosTempApi.forEach((elemento) => {
        criaCard(elemento);
        num++
    })
    document.getElementById('carregarMais')
        .addEventListener('click',RequestAll);
}
function BrowserClick(){
    var setaAncora = document.querySelector('.Browser');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText= "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;
        removeRequests('RequestBrowser');
        RequestBrowser()
    });
}
function RequestBrowser(){
    var jogosTempBrowser = []
    jogosTempBrowser = TodosJogosBrowser.slice(0+num, 9+num)
    jogosTempBrowser.forEach((elemento) => {
                criaCard(elemento);
                num++
            })
    document.getElementById('carregarMais')
        .addEventListener('click',RequestBrowser);
}
function RequestAll() {
        var jogosTempPc = []
        jogosTempPc = todosJogosPC.slice(0+num, 9+num)
        jogosTempPc.forEach((elemento) => {
            criaCard(elemento);
            num++
        })
        document.getElementById('carregarMais')
            .addEventListener('click',RequestPc);
}
function pcClick(){
    var setaAncora = document.querySelector('.PC');
    setaAncora.addEventListener('click', () => {
        apagaSecao.innerText= "";
        var recebeClass = document.querySelector('.removeBotao');
        recebeClass.style.display = '';
        var recebeClassBanner = document.querySelector('.galleryBanner');
        recebeClassBanner.style.display = '';
        num = 0;
        removeRequests('RequestPc');
        RequestPc();
    });
}
function RequestPc() {
    var jogosTempPc = []
    jogosTempPc = todosJogosPC.slice(0+num, 9+num)
    jogosTempPc.forEach((elemento) => {
        criaCard(elemento);
        num++
    })
    document.getElementById('carregarMais')
        .addEventListener('click',RequestPc);
}

document.getElementById("radio1").checked = true

setInterval(function(){
    nextImage();
},4000)

function nextImage() {
    count++;
    if(count > 4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true
}
function RequestImgBanner(){
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
            jogosTemp = dados.slice(10, 14)
            var numero = Number(0)
            jogosTemp.forEach((elemento) =>{
                numero++;
                InsertImgBanner(elemento, numero);
            })
        })
}
function InsertImgBanner(jogo, numero){
    const DivSlides = document.querySelector('.slides');
    var DivImg1 = document.querySelector(`#img${numero}`);
    const img1 = document.createElement('img');
    img1.src= jogo.thumbnail;
    const tagA = document.createElement('a');
    tagA.setAttribute ('href', jogo.freetogame_profile_url);
    tagA.setAttribute('target', '_blank');
    DivImg1.appendChild(tagA);
    tagA.appendChild(img1);
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

requestPopulares();
homeClick();
relevanciaClick();
alfabeticaClick();
mmoClick();
mobaClick();
cardClick();
strategyClick();
openWorldClick();
categoriasdoPCeBrowser();
pcClick();
categoriasdoPCeBrowser();
BrowserClick();
AllClick();
RequestImgBanner();