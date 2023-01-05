const formButton = document.querySelector('#button');
function validate() {
  const text = document.getElementById('mail').value;
  const validator = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  document.forms[0].onsubmit = function email(e) {
    if (!(validator.test(text))) {
      document.getElementById('error-message').innerHTML = 'Please use lowercase to enter valid email address!';
      document.getElementById('error-message').style.visibility = 'visible';
      document.getElementById('error-message').style.color = 'white';
      document.getElementById('error-message').style.background = 'red';
      document.getElementById('error-message').style.textAlign = 'center';
      console.log("i am inside");
      e.preventDefault();
    }
  };
}

formButton.addEventListener('click', () => {
  validate();
  console.log("I passed this")
});