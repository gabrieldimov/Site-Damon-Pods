// ===========================
// Botões Comprar e Carrinho
// ===========================

const cart = [];
const carroCount = document.getElementById("cart-count");
const cartItemsContainer = document.querySelector(".cart-items");
const emptyCartMessage = document.querySelector(".empty-cart");
const limparCarrinhoBtn = document.getElementById("limpar-carrinho");
const finalizarCompraBtn = document.getElementById("finalizar-compra");

function updateCartDisplay() {
    if (carroCount) {
        carroCount.textContent = cart.length;
    }

    if (!emptyCartMessage || !cartItemsContainer) return;

    if (cart.length === 0) {
        emptyCartMessage.style.display = "block";
        cartItemsContainer.innerHTML = "";
        return;
    }

    emptyCartMessage.style.display = "none";
    cartItemsContainer.innerHTML = cart
        .map(
            (item, index) =>
                `<li class="cart-item"><span>${item.title}</span><button type="button" data-index="${index}" class="remove-item">Remover</button></li>`
        )
        .join("");

    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            cart.splice(Number(this.dataset.index), 1);
            updateCartDisplay();
        });
    });
}

function addToCart(event) {
    const button = event.currentTarget;
    const product = button.closest(".product");
    const titleElement = product?.querySelector("h3");
    const title = titleElement?.textContent?.trim() || "Produto";

    cart.push({ title });
    updateCartDisplay();
}

function initCart() {
    const botoes = document.querySelectorAll(".comprar");

    botoes.forEach((botao) => {
        botao.addEventListener("click", addToCart);
    });

    if (limparCarrinhoBtn) {
        limparCarrinhoBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("Carrinho já está vazio.");
                return;
            }
            cart.length = 0;
            updateCartDisplay();
        });
    }

    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener("click", function () {
            if (cart.length === 0) {
                alert("Adicione um produto antes de finalizar.");
                return;
            }
            alert("Compra finalizada com sucesso!");
            cart.length = 0;
            updateCartDisplay();
        });
    }

    updateCartDisplay();
}

document.addEventListener("DOMContentLoaded", initCart);

// ===========================
// Formulário de Contato
// ===========================

const formulario = document.getElementById("contact-form");

if (formulario) {
    formulario.onsubmit = function (event) {
        event.preventDefault();

        const nome = formulario.querySelector("input[type='text']")?.value.trim() || "";
        const email = formulario.querySelector("input[type='email']")?.value.trim() || "";
        const mensagem = formulario.querySelector("textarea")?.value.trim() || "";

        if (nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos.");
        } else {
            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        }
    };
}

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