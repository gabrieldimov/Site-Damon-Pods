// ==========================
// Navbar muda ao rolar
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(255,0,0,.3)";
    } else {
        header.style.background = "rgba(0,0,0,.85)";
        header.style.boxShadow = "0 5px 20px rgba(255,0,0,.15)";
    }
});

// ==========================
// Botões Comprar
// ==========================

const botoes = document.querySelectorAll(".comprar");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        alert("Produto adicionado ao carrinho!");

    });

});

// ==========================
// Formulário
// ==========================

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = formulario.querySelector("input[type='text']").value;
    const email = formulario.querySelector("input[type='email']").value;
    const mensagem = formulario.querySelector("textarea").value;

    if(nome === "" || email === "" || mensagem === ""){

        alert("Preencha todos os campos.");

        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});

// ==========================
// Rolagem suave
// ==========================

const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});