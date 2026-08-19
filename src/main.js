import { PRODUCTS } from "./data.js";

const lista = document.querySelector(".lista");

PRODUCTS.forEach((item) => {
  lista.innerHTML += `
        <div class="card">

            <div class="info-prod">
                <div>
                  <p class="name-prod no-margin">${item.name}</p>
                  <p class="desc-prod no-margin">${item.desc}</p>
                </div>
                <p class="price-prod no-margin">$${item.price}</p>
            </div>

            <div class="images-prod">
              <div class="icono">${item.img}</div>
              <button class="button-add">
                  +
              </button>
            </div>
        </div>
    `;
});
