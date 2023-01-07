const liEls = document.querySelectorAll(".carousel-cards li");
let index = 0

function show(increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" })

}

setInterval(() => {
    if (index === liEls.length - 1) {
        show(index - 2)
    } else { show(index + 1) }
}, 5000)

// O modal
var modal = document.getElementById("myModal");

// Botao Modal
var btn = document.getElementById("botao");

// <span> fecha o modal
var span = document.getElementsByClassName("close")[0];

// Ao clicar abrir o modal 
botao.onclick = function() {
  modal.style.display = "block";
}

// O que faz ao clicar no X
span.onclick = function() {
  modal.style.display = "none";
}

// Quando se clicar em qualquer parte fora do modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

