const cancel = document.querySelector("#cancel");
const hamburger = document.querySelector("#hamburger");

function openDiv() {
  const popup = document.querySelector("#popup");
  popup.style.display = "block";
}

function closeDiv() {
  const get = document.querySelector("#popup");
  get.style.display = "none";
}

cancel.addEventListener("click", function () {
  closeDiv();
});

hamburger.addEventListener("click", function () {
  openDiv();
});
