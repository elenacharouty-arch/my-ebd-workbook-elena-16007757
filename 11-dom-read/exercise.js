// 11-dom-read — your work goes in this file.

export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  const cards = document.querySelectorAll(".card");
  return Array.from(cards).map((card) => card.querySelector("h3").textContent);
}

export function priceOf(name) {
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    if (card.querySelector("h3").textContent === name) {
      return card.querySelector(".price").textContent;
    }
  }
  return null;
}

export function soldOutNames() {
  const cards = document.querySelectorAll(".card.sold-out");
  return Array.from(cards).map((card) => card.querySelector("h3").textContent);
}