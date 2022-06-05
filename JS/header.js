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
    var descendentes = document.querySelectorAll(headerObj);
    for (var i = 0; i < descendentes.length; i++) {
        descendentes[i].addEventListener("click", function (e) {
            descendentes.value = 3;
            if(descendentes[i] === 'pc'){
                this.style.backgroundColor = "red";
            }
            console.log(descendentes.value);
        })
    }
}