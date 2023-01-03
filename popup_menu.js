let cancel = document.querySelector("#cancel");
let hamburger = document.querySelector("#hamburger");

function openDiv() {
  console.log("Open div")
  let popup = document.querySelector("#popup");
  popup.style.display = "block";
}

function closeDiv() {
  let get = document.querySelector("#popup");
  get.style.display = "none";
}

cancel.addEventListener("click", function () {
  closeDiv();
});

hamburger.addEventListener("click", openDiv);


