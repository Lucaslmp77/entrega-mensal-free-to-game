/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 


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
            const jogos = data
            /*const jogos1 = data[0]
            console.log(jogos1)*/
            for(var i = num; i < num+9; i++) {
                const jogosdiv =jogos[i+ num]
                /*console.log(jogos)*/
                criadiv(jogosdiv);
            }
            num += 10;
        })
}
var num = 0;
main()
function addDez(jogos) {
    for(var i = 0; i < 10; i++) {
        var jogosTemporarios = jogos[i + num];
        criadiv(jogosTemporarios);
    }
    num += 10;
}

function criadiv(jogos) {
    const div = document.querySelector('.gallery')
    const div1 = document.createElement('div')
    div1.setAttribute('class', 'galleryCard')
    div.appendChild(div1);
    const div3 = document.createElement('h2')
    div3.setAttribute('class', 'galleryCardTitle')
    div3.innerHTML = jogos.title;
    div1.appendChild(div3);
    div1.style.backgroundImage=`url(${jogos.thumbnail})`
    const div4 = document.createElement('a')
    div4.setAttribute('class', 'galleryCardBtn')
    div4.setAttribute('onclick', 'fav()')
    const jogosDiv = jogos
    fav(jogosDiv)
    div4.innerHTML = '&#10025;';
    div1.appendChild(div4);
}
function fav(jogos){
    //const jogo1 = jogos
    console.log(jogos)

}
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
