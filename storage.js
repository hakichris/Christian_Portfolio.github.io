const form = document.querySelector('#contact');
form.addEventListener('submit', (e) => {  
  const obj = {
    fullName: document.querySelector('#name').value,
    emailAdress: document.querySelector('#email').value,
    message: document.querySelector('#msg').value,
  };

  localStorage.setItem('text', JSON.stringify(obj));
});

const retrievedObject = localStorage.getItem('text');
const getValue = JSON.parse(retrievedObject);

window.addEventListener('load', () => {
  if (localStorage.getItem('text')) {
    document.querySelector('#name').value = getValue.fullName;
    document.querySelector('#email').value = getValue.emailAdress;
    document.querySelector('#msg').value = getValue.message;
  }
});
