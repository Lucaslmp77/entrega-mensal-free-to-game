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

/* function werePosition(el){
    var nomesCat = [".ancHome", ".ancRelevancia", ".ancAlfabetica", ".ancMmorpg", ".ancMoba", ".ancCard", ".ancStrategy", ".ancOpenWorld"];
    var nomesPlat = ['.all', '.pc', '.browser'];
    var recebePlat;
    var recebeCat;
    var decisao = document.querySelector(el);
    decisao.addEventListener("click", function () {
        if(decisao) {
            for(var j = 0; j < 3; j ++){
                if(el === nomesPlat[j]){
                    recebePlat = `${j}`;
                }
            } 
            for(var i = 0; i < 8; i ++){
                if(el === nomesCat[i]){
                    recebeCat = `${i}`;
                }
            } 
        }
        console.log(recebePlat, recebeCat);
    });
}

export function runWere() {
    werePosition('.pc');
    werePosition('.browser');
    werePosition('.all');

    werePosition('.ancHome');
    werePosition('.ancRelevancia');
    werePosition('.ancAlfabetica');
    werePosition('.ancMmorpg');
    werePosition('.ancMoba');
    werePosition('.ancCard');
    werePosition('.ancStrategy');
    werePosition('.ancOpenWorld');
} */