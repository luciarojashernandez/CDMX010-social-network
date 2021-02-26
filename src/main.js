import { authGoogle, authFacebook } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcLogin } from './lib/logicFirebase.js';
import { register } from './components/createAccount.js';

let rootDiv = null;

const createAccountHome = () => {
  document.querySelector('#createAccount').addEventListener('click', () => {
    const navigate = onNavigate('/createAccount');
    rootDiv.innerHTML = navigate;
    register();
  });
};

const loginHome = () => {
  document.querySelector('#login').addEventListener('click', () => {
    const email = document.querySelector('#emailLogin').value;
    const password = document.querySelector('#passwordLogin').value;
    funcLogin(email, password);
  });
};

const loginGmail = () => {
  document.querySelector('#gmailIcon').addEventListener('click', authGoogle);
};

const loginFacebook = () => {
  document.querySelector('#facebookIcon').addEventListener('click', authFacebook);
};

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  createAccountHome();
  loginHome();
  loginGmail();
  loginFacebook();
});

window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};
