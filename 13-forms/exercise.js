// 13-forms — your work goes in this file.

const items = [];

export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceEl = document.createElement("p");
    priceEl.classList.add("price");
    priceEl.textContent = `${item.price} EGP`;

    card.append(heading, priceEl);
    list.append(card);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const error = document.querySelector("#error");
  const { name, price } = readForm();

  if (name === "") {
    error.textContent = "Give the product a name.";
    return;
  }

  if (!price || price <= 0) {
    error.textContent = "Give the product a price.";
    return;
  }

  error.textContent = "";
  items.push({ name, price });
  renderList(items);
  clearForm();
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  // Replace any previous listener by using a fresh copy of the node.
  form.removeEventListener("submit", handleSubmit);
  form.addEventListener("submit", handleSubmit);
}