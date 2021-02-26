import { authGoogle, authFacebook } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcLogin, funcCreateAccount } from './lib/logicFirebase.js';
import { register } from './components/createAccount.js';

let rootDiv = null;

const createAccountHome = () => {
  const navigate = onNavigate('/createAccount');
  rootDiv.innerHTML = navigate;
};

const loginHome = () => {
  const email = document.querySelector('#emailLogin').value;
  const password = document.querySelector('#passwordLogin').value;
  funcLogin(email, password);
};

const loginGmail = () => {
  authGoogle();
};

const loginFacebook = () => {
  authFacebook();
};

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  rootDiv.addEventListener('click', (event) => {
    const target = event.target;
    if (target.id === 'login') {
      loginHome();
    } else if (target.id === 'createAccount') {
      createAccountHome();
    } else if (target.id === 'gmailIcon') {
      loginGmail();
    } else if (target.id === 'facebookIcon') {
      loginFacebook();
    } else if (target.id === 'btnSignin') {
      register(funcCreateAccount);
    }
  });
});

window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};
