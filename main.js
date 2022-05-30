/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/
var TODOS_OS_DADOS = [];
var ELEMENTOS_CARREGADOS = [];
var MEUS_FAVORITOS = [];
var num = 0;
var num2 = 0;
var num3 = 0
let APAGA_SEÇÃO = document.querySelector('.gallery')
function favorite(){
    //APAGA_SEÇÃO = document.querySelector('.gallery')
    APAGA_SEÇÃO.innerText= ""

    MEUS_FAVORITOS.forEach((elemento) => {
        criadiv(elemento);
    })
}
function main() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(data =>{

            TODOS_OS_DADOS = data;
            ELEMENTOS_CARREGADOS = TODOS_OS_DADOS.slice(0+num, 9+num)
            ELEMENTOS_CARREGADOS.forEach((elemento) => {
                criadiv(elemento);
                num++
            })
        })
}

main()

function criadiv(jogo) {
    const ContainerDosJogos = document.querySelector('.gallery')
    const ContainerDoJogo = document.createElement('div')
    ContainerDoJogo.setAttribute('class', 'galleryCard')
    ContainerDosJogos.appendChild(ContainerDoJogo);
    const LinkDojogo = document.createElement('a')
    LinkDojogo.setAttribute('class', 'linkDoJogo')
    LinkDojogo.setAttribute('href', jogo.freetogame_profile_url)
    LinkDojogo.setAttribute('target', '_blank')
    ContainerDoJogo.appendChild(LinkDojogo)
    const ImagemDoJogo = document.createElement('img')
    ImagemDoJogo.setAttribute('class', 'imagemJogo')
    ImagemDoJogo.src= jogo.thumbnail
    LinkDojogo.appendChild(ImagemDoJogo)
    const TituloDoJogo = document.createElement('h2')
    TituloDoJogo.setAttribute('class', 'galleryCardTitle')
    TituloDoJogo.innerHTML = jogo.title;
    ContainerDoJogo.appendChild(TituloDoJogo);
    const GeneroDoJogo = document.createElement('p')
    GeneroDoJogo.setAttribute('class', 'GeneroDoJogo')
    GeneroDoJogo.innerHTML = jogo.genre;
    ContainerDoJogo.appendChild(GeneroDoJogo)
    const BotaoFavorito = document.createElement('a')
    BotaoFavorito.setAttribute('class', 'galleryCardBtn')
    BotaoFavorito.setAttribute('onclick', `AddFav(${jogo.id})`)
    BotaoFavorito.innerHTML = '&#10025;';
    ContainerDoJogo.appendChild(BotaoFavorito);
}
function AddFav(idDoJogo){
    var jogoClicado = ELEMENTOS_CARREGADOS.find(element => element.id === idDoJogo)
    console.log("Jogo clicado",jogoClicado)
    MEUS_FAVORITOS.push(jogoClicado)
    MEUS_FAVORITOS = MEUS_FAVORITOS.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null))
    console.log("MEUS_FAVORITOS: ",MEUS_FAVORITOS)
}

function relevancia(){
    var JOGOS_RELEVANTES = []
    var MAIS_DEZ_JOGOS_REL = []
    APAGA_SEÇÃO.innerText= ""
    /*const estiliza = document.querySelector('#relevancia')
    estiliza.style.backgroundColor = "#808080";*/

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance', options)
        .then(response => response.json())
        .then(data =>{

            JOGOS_RELEVANTES = data;
            MAIS_DEZ_JOGOS_REL= JOGOS_RELEVANTES.slice(0+num3, 9+num3)
            MAIS_DEZ_JOGOS_REL.forEach((elemento) => {
                criadiv(elemento);
                num3++
            })
        })
}

function catAlfabetia(){
    var JOGOS_ALFABETICOS = [];
    var MAIS_DEZ_JOGOS_ALFA = [];
    APAGA_SEÇÃO.innerText= ""
    /*const estiliza = document.querySelector('.alfabetico')
    estiliza.style.backgroundColor = "#808080";*/

    console.log(ELEMENTOS_CARREGADOS)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c5f0275emsh2db5dab1da3382dp129146jsn7339bd21e95d'
        }
    };
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical', options)
        .then(response => response.json())
        .then(data =>{

            JOGOS_ALFABETICOS = data;
            console.log(JOGOS_ALFABETICOS)
            MAIS_DEZ_JOGOS_ALFA= JOGOS_ALFABETICOS.slice(0+num2, 9+num2)
            MAIS_DEZ_JOGOS_ALFA.forEach((elemento) => {
                criadiv(elemento);
                num2++
            })
        })
}

/*function mostrarCatAtivo(tag){
    var tag_li = document.getElementById('navList');
    var tag_a = tag_li.getElementsByTagName('a');
    console.log(tag_a.length)
    for (i=0; i<tag_a.length; i++ )
    {
        tag_a[i].style.color = "";
    }
    tag_a.style.backgroundColor = "#ff0000";
}*/

    document.querySelector("[name='phone']");
    let scroller = document.getElementById("scroller")
    window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scroller.style.display = "block";
        } else {
            scroller.style.display = "none";
        }
    }
    scroller.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
            //descontinuada
            document.body.scrollTop = 0;
        }
    )
$( ".galleryCardBtn" ).click(function() {
    $( ".alert-box-success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
    console.log("teste")
});