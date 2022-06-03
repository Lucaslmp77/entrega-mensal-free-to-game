export function createHomeContent(){
    const setaBody = document.querySelector('body');
    const criaHomeContent = document.createElement('div');
    criaHomeContent.setAttribute('class', 'homeContent');
    setaBody.appendChild(criaHomeContent);

    const setaHomeContent = document.querySelector('.homeContent');
    const criaGallery = document.createElement('div');
    criaGallery.setAttribute('class', 'gallery');
    setaHomeContent.appendChild(criaGallery);

    const criaButton = document.createElement('button');
    criaButton.setAttribute('class', 'removeBotao');
    criaButton.setAttribute('id', 'carregarMais');
    criaButton.appendChild(document.createTextNode("Carregar Mais"));
    setaHomeContent.appendChild(criaButton);
}