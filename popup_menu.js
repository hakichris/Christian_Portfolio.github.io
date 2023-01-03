const cancel = document.querySelector('#cancel');
const hamburger = document.querySelector('#hamburger');

openDiv = () => {
  const popup = document.querySelector('#popup');
  popup.style.display = 'block';
}

closeDiv = () => {
  const get = document.querySelector('#popup');
  get.style.display = 'none';
}

cancel.addEventListener('click', ()=> {
  closeDiv();
});

hamburger.addEventListener('click', ()=> {
  openDiv();
});
