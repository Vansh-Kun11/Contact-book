const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const contactList = document.getElementById("contact-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!form.checkValidity()) return;

  addContact();
  form.reset();
});

function addContact() {
  const div = document.createElement("div");

  div.innerHTML = `
    <p>${nameInput.value}</p>
    <p>${emailInput.value}</p>
    <button>Delete</button>
  `;

  // delete button logic
  div.querySelector("button").addEventListener("click", function () {
    div.remove();
  });

  contactList.appendChild(div);
}