/* FETCH PER I DATI DEI PRODOTTI */

const url = "package.json";
let classeFetch;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    classeFetch = data;

    createCatalog();
    createFirstPage();
  });

/* FUNZIONE PER LA PRIMA PAGINA */

function createFirstPage() {
  classeFetch.firstPageData.forEach(({ titleSection, img }) => {
    document.querySelector("#first-page").innerHTML += `
        <div class="racommended">
          <a href="#${titleSection}">
            <div class="products">
              <h3>${titleSection}</h3>
              <img src="${img}" class="image">
            </div>
          </a>
        </div>`;
  });
}

/* FUNZIONE PER IL CATALOGO */
function createCatalog() {
  let sectionHtml = ``;
  classeFetch.catalogData.forEach((container) => {
    sectionHtml += `<section class="categoryContainer"><h2 class="categoryTitle" id=${container.title}>${container.title}</h2><div class="cardContainer">`;

    container.items.forEach(({ img, name, price }) => {
      sectionHtml += `
        <div class="card">
          <img class="vestiti" src="${img}" alt="${name}">
          <h4>${name}</h4>
          <p>${price}</p>
          <button class="add-to-cart-btn" data-img="${img}" data-name="${name}" data-price="${price}">Aggiungi al carrello</button>
        </div>
      `;
    });

    sectionHtml += `</div></section>`;
  });
  document.querySelector("#catalog-container").innerHTML += sectionHtml;

  //* AGGIUNGERE EVENTO A TUTTI GLI "AGGIUNGI AL CARRELLO" */
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const product = {
        img: e.target.dataset.img,
        name: e.target.dataset.name,
        price: e.target.dataset.price,
      };
      addToCart(product); /* AGGIUNGI PRODOTTO AL CARRELLO */
    });
  });
}
