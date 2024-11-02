const emailInput = document.getElementById('email')
const pwInput = document.getElementById('password')
const loginButton = document.getElementById('login')

function activebutton() {
  if (emailInput.value.length>0 && pwInput.value.length > 0) {
    loginButton.classList.add('active');
    loginButton.disabled = false;
  } else {
    loginButton.classList.remove('active');
    loginButton.disabled = true;
  }
}

emailInput.addEventListener('input', activebutton);
pwInput.addEventListener('input', activebutton)