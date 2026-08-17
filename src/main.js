import { PRODUCTS } from "./data.js";

const lista = document.querySelector(".lista");

PRODUCTS.forEach((item) => {
  lista.innerHTML += `
        <div class="producto">
            <div class="icono">${item.img}</div>

            <div>
                <p class="name-prod">${item.name}</p>
                <p class="desc-prod">${item.desc}</p>
                <p class="price-prod">$${item.price}</p>
            </div>

            <button class="button-add">
                +
            </button>
        </div>
    `;
});