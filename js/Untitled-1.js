const btn = document.querySelector(".btn-hotel");
const searchHostels = document.querySelector("form");
const arrival = searchHostels.querySelector("[name=arrival]");
const departure = searchHostels.querySelector("[name=departure]");
const adult = searchHostels.querySelector("[name=adult]");
const children = searchHostels.querySelector("[name=children]");

btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchHostels.classList.toggle("modal-close");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchHostels.classList.contains("search-hostels")) {
      evt.preventDefault();
      searchHostels.classList.add("modal-close");
    }
  }
});

searchHostels.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    evt.preventDefault();
    searchHostels.classList.add("modal-error");
  }
}