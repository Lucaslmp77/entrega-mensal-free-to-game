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

function criaBanner(jogosBanner) {
    const setaDiv = document.querySelector('.homeContent');
    const criaBanner = document.createElement('div');
    criaBanner.setAttribute('class', 'galleryBanner');
    criaBanner.style.backgroundImage=`url(${jogosBanner.thumbnail})`;
    setaDiv.insertBefore(criaBanner, carregarMais);
}

requestBanner();