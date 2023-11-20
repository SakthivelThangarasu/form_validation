const form = document.getElementById ('form');
const username = document.getElementById ('username');
const email = document.getElementById ('email');
const password1 = document.getElementById ('password');
const password2 = document.getElementById ('confirmpassword');

form.addEventListener ('submit', e => {
  e.preventDefault ();
  checkInput ();
});

function checkInput () {
  const usernameValue = username.value.trim ();
  const emailValue = email.value.trim ();
  const password1Value = password1.value.trim ();
  const password2Value = password2.value.trim ();

  /* username condiction */
  if (usernameValue === '') {
    setError (username, 'Username Cannot Be Blank');
  } else {
    setSuccess (username);
  }

  /* email condiction */

  if (emailValue === '') {
    setError (email, 'Email Cannot Be Blank');
  } else if (!isEmail (emailValue)) {
    setError (email, 'Not a valid Email');
  } else {
    setSuccess (email);
  }

  /* Password1 */

  if (password1Value === '') {
    setError (password1, 'Password Cannot Be Blank');
  } else {
    setSuccess (password1);
  }

  /* conform password */

  if (password2Value === '') {
    setError (password2, 'Confirm Password Cannot Be Blank');
  } else if (password1Value !== password2Value) {
    setError (password2, 'Password Cannot Be Match');
  } else {
    setSuccess (password2);
  }
}

/* Call By Arrguments */

function setError (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector ('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccess (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

/* main function */

function isEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test (
    email
  );
}
