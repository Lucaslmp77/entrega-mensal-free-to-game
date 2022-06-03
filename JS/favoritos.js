function removeBtn() {
    var recebeClass = document.querySelector('.removeBotao');
    recebeClass.style.display = 'none';
}

function removeBanner() {
    var recebeClass = document.querySelector('.galleryBanner');
    recebeClass.style.display = 'none';
}

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
    brilhaEstrela.style.filter = "saturate(300%)"
    console.log("Jogo clicado",jogoClicado)
    meusFavoritos.push(jogoClicado)
    // meusFavoritos = meusFavoritos.filter(function (a) {
    //     return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    // }, Object.create(null))
    console.log("MEUS_FAVORITOS: ",meusFavoritos);
}