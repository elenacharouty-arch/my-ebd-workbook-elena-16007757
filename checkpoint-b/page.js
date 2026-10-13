// Checkpoint B — your behaviour.

import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.querySelector("#list");
  ul.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("stock-line");
    li.textContent = `${item.name} - ${item.price} EGP`;
    ul.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.price > 100);
}

export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}