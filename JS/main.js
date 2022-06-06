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

import {
    plataformLinks
} from './requisicoes.js'

runHeader();
runSideBar();
createHomeContent();
request();

plataformLinks('.all', '.ancHome');
plataformLinks('.pc', '.ancRelevancia');
plataformLinks('.browser', '.ancAlfabetica');
plataformLinks('.all', '.ancMmorpg');
plataformLinks('.all', '.ancMoba');
plataformLinks('.all', '.ancCard');
plataformLinks('.all', '.ancStrategy');
plataformLinks('.all', '.ancOpenWorld');