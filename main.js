/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg  ====MMORPG====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=battle-royale   ====BATTLE ROYALE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=sports   ====SPORTS====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=racing   ====RACING====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror   ====HORROR====*/ 

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
    console.log(jogos);
    addDez(jogos);
}

var num = 0;

function addDez(jogos) {
    for(var i = 0; i < 10; i++) {
        var jogosTemporarios = jogos[i + num];
        criaCard(jogosTemporarios);
    }
    num += 10;
}

function criaCard(jogos) {
    const setaDiv = document.querySelector('.gallery')
    const criaDiv = document.createElement('div')
    criaDiv.setAttribute('class', 'galleryCard')
    setaDiv.appendChild(criaDiv);

    const criaTitle = document.createElement('h2')
    criaTitle.setAttribute('class', 'galleryCardTitle')
    criaTitle.innerHTML = jogos.title;
    criaDiv.appendChild(criaTitle);
    criaDiv.style.backgroundImage=`url(${jogos.thumbnail})`

    const criaStar = document.createElement('a')
    criaStar.setAttribute('class', 'galleryCardBtn')
    criaStar.innerHTML = '&#10025;';
    criaDiv.appendChild(criaStar);
}

document.getElementById('carregarMais')
        .addEventListener('click',request);