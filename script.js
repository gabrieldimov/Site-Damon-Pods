// ===========================
// Botões Comprar
// ===========================

let botoes = document.getElementsByClassName("comprar");

for (let i = 0; i < botoes.length; i++) {

    botoes[i].onclick = function () {
        alert("Produto adicionado ao carrinho!");
    };
}

// ===========================
// Formulário de Contato
// ===========================

let formulario = document.getElementById("contact-form");

formulario.onsubmit = function (event) {

    event.preventDefault();

    let nome = document.getElementsByTagName("input")[0].value;
    let email = document.getElementsByTagName("input")[1].value;
    let mensagem = document.getElementsByTagName("textarea")[0].value;

    if (nome == "" || email == "" || mensagem == "") {
        alert("Preencha todos os campos.");
    } else {
        alert("Mensagem enviada com sucesso!");

        formulario.reset();
    }
};

// ===========================
// Mudar a cor da Navbar
// ===========================

window.onscroll = function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.backgroundColor = "black";
    } else {
        header.style.backgroundColor = "rgba(0,0,0,0.85)";
    }
};