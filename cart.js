/* ARRAY PER INSERIRE I PRODOTTI */

let cart = [];

/* AGGIORNARE IL NUMERO PRODOTTI */
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

/* AGGIUNGI PRODOTTO AL CARRELLO */
function addToCart(product) {
  cart.push(product);
  updateCartCount();
  alert(`${product.name} aggiunto al carrello!`);
}

/* MOSTRA CONTENUTO CARRELLO */
function openCart() {
  const cartContainer = document.createElement("div");
  cartContainer.id = "cart-page";
  cartContainer.innerHTML = `
    <div id="cart-content">
      <h2>Carrello</h2>
      <button id="close-cart">Chiudi</button>
      <div id="cart-items">
        ${
          cart.length > 0
            ? cart
                .map(
                  (item) => `
          <div class="cart-item">
            <img src="${item.img}" alt="${item.name}" class="cart-image">
            <div>
              <h4>${item.name}</h4>
              <p>${item.price}</p>
            </div>
          </div>
        `
                )
                .join("")
            : "<p>Il carrello è vuoto.</p>"
        }
      </div>
    </div>
  `;
  document.body.appendChild(cartContainer);

  /* CHIUDI CARRELLO */
  document.getElementById("close-cart").addEventListener("click", () => {
    cartContainer.remove();
  });
}

/* PER IL BUTTON DEL CARRELLO */
document.getElementById("cart").addEventListener("click", openCart);

/* AGGIUNTA AL CARRELLO PER OGNI BOTTONE */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart-btn").forEach((button, index) => {
    button.addEventListener("click", () => {
      const product = {
        img: button.closest(".card").querySelector(".vestiti").src,
        name: button.closest(".card").querySelector("h4").textContent,
        price: button.closest(".card").querySelector("p").textContent,
      };
      addToCart(product);
    });
  });
});
