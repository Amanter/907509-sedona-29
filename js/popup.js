const btn = document.querySelector(".btn-hotel");
const searchHostels = document.querySelector("form");

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