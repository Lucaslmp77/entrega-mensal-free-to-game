/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance   ====RELEVÂNCIA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity   ====POPULARIDADE====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 
/* https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical   ====ALFABÉTICA====*/ 

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
    div4.innerHTML = '&#10025;';
    div4.value = jogos; //
    div1.appendChild(div4);
}

document.getElementById('carregarMais')
        .addEventListener('click',request);