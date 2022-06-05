export function runHeader() {
    var headerObj = ["pc", "browser", "all", "favoritos"];
    const setaBody = document.querySelector('body')
    const criaNav = document.createElement('nav');
    criaNav.setAttribute('class', 'headerNav');
    setaBody.appendChild(criaNav);
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

function werePosition(el){
    var recebe;
    var decisao = document.querySelector(el);
    decisao.addEventListener("click", function () {
        if(decisao) {
            if(el === '.all'){
                recebe = 0;
            }
            if(el === '.pc'){
                recebe = 1;
            }
            if(el === '.browser'){
                recebe = 2;
            }
            console.log(recebe);
        }
    });
}

export function runWere() {
    werePosition('.pc');
    werePosition('.browser');
    werePosition('.all');
}