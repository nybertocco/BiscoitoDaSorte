const home = document.querySelector(".home")
const sorte = document.querySelector(".sorte")
const biscoito = document.querySelector("#biscoito")
const biscoito2 = document.querySelector("#biscoito-2")
const frase = document.querySelector("#frase")
const btnReset = document.querySelector("#btnReset")

    biscoito.addEventListener('click', handleBiscoitoClick)
    btnReset.addEventListener('click', handleResetClick)

function handleBiscoitoClick() {
    toggleScreen()
}

function handleResetClick() {
   toggleScreen()
}

function toggleScreen() {
    home.classList.toggle("hide")
    sorte.classList.toggle("hide")
}
