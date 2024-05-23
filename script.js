let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe menu-fechado
    // menu.classList.toggle("menu-fechado")

    if (menu.classList.contains("menu-fechado")) {
        // Abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        // Esconder icone barras
        iconeBarras.style.display = "none"

        // Mostrar o icone do X
        iconeX.style.display = "inline"

    }

    else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-fechado")

        // Esconder icone do X
        iconeX.style.display = "none"

        // Mostrar o icone barras
        iconeBarras.style.display = "inline"
    }
}

onresize = () => {
    // Abrir o menu - remover a classe menu-fechado
    menu.classList.remove("menu-fechado")

    // Esconder icone barras
    iconeBarras.style.display = "none"

    // Mostrar o icone do X
    iconeX.style.display = "inline"
}

// carossel

let banner = document.querySelector(".banner")

// let slides = [0, 1, 2]
// slide[0] --> primeiro-banner
// slide[1] --> segundo-banner
// slide[2] --> terceiro-banner

let slides = [
    "primeiro-banner", //0
    "segundo-banner", //1
    "terceiro-banner" //2
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {

    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        // Somar 1 na variavel slide atual
        slideAtual++
    } else {
        //Voltar para o primeiro banner
        slideAtual = 0
    }

    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function mostrarSlideAnterior() {
    // Remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual > 0) {

        //Subtrair 1 na variavel slideAtual
        slideAtual--

    } else {
        //Voltar para o ultimo slide
        slideAtual = 2
    }


    // Mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    // Remove o slide atual
    banner.classList.remove(slides[slideAtual])

    // Atualize a variavel com o indice de slide selecionado
    slideAtual = indiceSlide

    //  Mostra o slide selecionado e salvo na variavel slideAtual
    banner.classList.add(slides[slideAtual])
}
