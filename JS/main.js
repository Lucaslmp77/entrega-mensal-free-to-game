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
    request
} from './requisicoes.js'

/* import {
    plataformLinks
} from './requisicoes.js' */

runHeader();
runSideBar();
createHomeContent();
request();

/* plataformLinks(); */