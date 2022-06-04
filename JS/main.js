import {
    runSideBar
} from './sideBar.js'

import {
    runHeader
} from './header.js'

import {
    createHomeContent
} from './pageBody.js'

import {
    homeClick
} from './requisicoes.js'

import {
    plataformLinks
} from './requisicoes.js'

function were(element) {
    var arrow = document.querySelector(element);
    arrow.onclick = () => {
        arrow.value = 1;
        if(element === '.PC' || element === '.Browser'){
            arrow.value = 2;
            var guardPlat = element;
        }
        else if(arrow.value === 1){
            var guardCat = element;
        }
    }
}

runHeader();
runSideBar();
createHomeContent();
homeClick();

plataformLinks();

/* were('.PC');
were('.Browser');
were('.All');

were('.ancHome');
were('.ancRelevancia');
were('.ancAlfabetica');
were('.ancMmorpg');
were('.ancMoba');
were('.ancCard');
were('.ancStrategy');
were('.ancOpenWorld'); */