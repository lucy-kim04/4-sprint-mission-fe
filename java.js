const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const emailErrorDiv = document.querySelector('.emailError');
const pwErrorDiv = document.querySelector('.pwError');
const emailContainer = document.querySelector('.email-in');
const pwContainer = document.querySelector('.password-in')



// 이메일
function validateEmail() {
  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  if (!emailValue) {  
    emailContainer.style.border = '1px solid red'; 
    emailErrorDiv.textContent = '이메일을 입력해주세요.'; 
    emailErrorDiv.style.display = 'block'; 
  } else if (!emailPattern.test(emailValue)) {
    emailContainer.style.border = '1px solid red';
    emailErrorDiv.textContent = '잘못된 이메일 형식입니다.';
    emailErrorDiv.style.display = 'block';
  } else {
    emailContainer.style.border = '1px solid transparent'; 
    emailErrorDiv.textContent = ''; 
    emailErrorDiv.style.display = 'none'; 
  }

  activeLoginButton();
}


// 비밀번호
function validatePassword() {
  const pwValue = pwInput.value;
  
  if (!pwValue) {  
    pwContainer.style.border = '1px solid red'; 
    pwErrorDiv.textContent = '비밀번호를 입력해주세요.'; 
    pwErrorDiv.style.display = 'block'; 
  } else if (pwValue.length < 8) {
    pwContainer.style.border = '1px solid red'; 
    pwErrorDiv.textContent = '비밀번호를 8자 이상 입력해주세요'; 
    pwErrorDiv.style.display = 'block'; 
  } else {
    pwContainer.style.border = '1px solid transparent'; 
    pwErrorDiv.textContent = ''; 
    pwErrorDiv.style.display = 'none'; 
  }

  activeLoginButton();
}


function activeLoginButton() {
  const emailValid = emailErrorDiv.style.display === 'none';
  const passwordValid = pwErrorDiv.style.display === 'none';

  if (emailValid && passwordValid) {
    loginButton.disabled = false;
    loginButton.classList.add('active');
  } else {
    loginButton.disabled = true;
    loginButton.classList.remove('active')
  }

}


emailInput.addEventListener('focusout', validateEmail);
pwInput.addEventListener('focusout', validatePassword);






const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]