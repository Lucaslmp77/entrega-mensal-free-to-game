const slides = document.querySelectorAll(".slide");
const carrossel = document.getElementById("carrossel");
const esquerda = document.getElementById("esquerda");
const direita = document.getElementById("direita");

const contador_slides = slides.length;

let slide_atual = 0;

esquerda.addEventListener("click", () => {
    slide_atual--;
    if(slide_atual < 0) {
        slide_atual = contador_slides - 1;
    }
    atualizar_carrossel();
})

direita.addEventListener("click", () => {
    slide_atual++;
    if(slide_atual > contador_slides - 1) {
        slide_atual = 0
    }
    atualizar_carrossel();
})

function atualizar_carrossel() {
    carrossel.style.transform = `translateX(${
        -slide_atual * slides[0].offsetWidth
        }px)`;
}
