export function runHeader() {
    var headerObj = ["pc", "browser", "all", "favoritos"];
    var classHeader = ["pc", "browser", "all activeHead", "favoritos"]
    const setaBody = document.querySelector('body')
    const criaNav = document.createElement('nav');
    criaNav.setAttribute('class', 'headerNav');
    setaBody.appendChild(criaNav);
    for(var i = 0; i < 4; i++){
        const criaA = document.createElement('a');
        criaA.setAttribute('class', classHeader[i]);
        criaA.appendChild(document.createTextNode(headerObj[i]));
        criaNav.appendChild(criaA);
        if(i == 3){
            criaA.setAttribute('onclick', 'favorite()');
        }
    }
    let seta = document.querySelectorAll('a');
    seta.forEach(a => {
        a.addEventListener('click', function () {
            seta.forEach(a => a.classList.remove('activeHead'));
            this.classList.add('activeHead');
        });
    });
}