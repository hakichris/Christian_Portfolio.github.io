let cancel = document.querySelector("#cancel");
let hamburger = document.querySelector("#menu");

function openDiv() {
  let popup = document.querySelector("#popup");
  popup.style.display = "block";
}

function closeDiv() {
  let get = document.querySelector("#popup");
  get.style.display = "none";
}

hamburger.addEventListener("click", function () {
  openDiv();
});

cancel.addEventListener("click", function () {
  closeDiv();
});
