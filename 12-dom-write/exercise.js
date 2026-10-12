// 12-dom-write — your work goes in this file.

export function addProduct(name, price) {
  const list = document.querySelector("#list");

  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceEl = document.createElement("p");
  priceEl.classList.add("price");
  priceEl.textContent = `${price} EGP`;

  card.append(heading, priceEl);
  list.append(card);
}

export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent === name);
  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll(".card"));
  const card = cards.find((c) => c.querySelector("h3").textContent === name);
  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
wireButtons();