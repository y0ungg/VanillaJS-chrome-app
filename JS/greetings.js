const loginForm = document.getElementById('login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.addEventListener('submit', onLoginSubmit);
}
else {
    loginForm.remove();
    paintGreetings(savedUsername);
}