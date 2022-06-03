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

//favoritos
var meusFavoritos = [];

var nomeOption = ["optionHome", "optionRelevancia", "optionHome", "optionHome", "optionHome", "optionHome", "optionHome", "optionHome"];

//objetos requests
var requests = [requestPopulares];

//remove eventListener dos requests de cada categoria
function removeRequests(nickPage){
    for(var i = 0; i < requests.length; i++){
        if(requests[i] != nickPage){
            document.getElementById('carregarMais')
                .removeEventListener('click',requests[i]);
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
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=popularity', options)
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

//funcao que executa o conteudo da categoria home (quando clicada)
export function homeClick(){
    let apagaSecao = document.querySelector('.gallery');
    var setaAncora = document.querySelector('.ancHome');
    setaAncora.addEventListener('click', () => {
            apagaSecao.innerText= "";
            /* var recebeClass = document.querySelector('.removeBotao');
            recebeClass.style.display = '';
            var recebeClassBanner = document.querySelector('.galleryBanner');
            recebeClassBanner.style.display = ''; */
            num = 0;
            removeRequests('requestPopulares');
            requestPopulares();
        });
    document.getElementById('carregarMais')
        .addEventListener('click', requestPopulares);
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

requestPopulares();