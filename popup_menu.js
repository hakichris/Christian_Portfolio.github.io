const cancel = document.querySelector('#cancel');
const hamburger = document.querySelector('#hamburger');
const option1 = document.querySelector('.port');
const option2 = document.querySelector('.Ab');
const option3 = document.querySelector('.cont');

function openDiv() {
  const popup = document.querySelector('#popup');
  popup.style.display = 'block';
}

function closeDiv() {
  const get = document.querySelector('#popup');
  get.style.display = 'none';
}

cancel.addEventListener('click', () => {
  closeDiv();
});

hamburger.addEventListener('click', () => {
  openDiv();
});

option1.addEventListener('click', () => {
  closeDiv();
});

option2.addEventListener('click', () => {
  closeDiv();
});

option3.addEventListener('click', () => {
  closeDiv();
});
