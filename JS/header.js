export function runHeader() {
    var headerObj = ["PC", "Browser", "All", "Favoritos"];
    const setaHomeContent = document.querySelector('.homeContent');
    const criaNav = document.createElement('nav');
    criaNav.setAttribute('class', 'headerNav');
    setaHomeContent.insertBefore(criaNav, carregarMais);
    for(var i = 0; i < 4; i++){
        const criaA = document.createElement('a');
        criaA.setAttribute('class', headerObj[i]);
        criaA.appendChild(document.createTextNode(headerObj[i]));
        criaNav.appendChild(criaA);
        if(i == 3){
            criaA.setAttribute('onclick', 'favorite()');
        }
    }
}