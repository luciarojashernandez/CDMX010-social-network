// Este es el punto de entrada de tu aplicacion
import { authGoogle } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcCreateAccount } from './lib/logicFirebase.js';

let rootDiv = null;

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  document.querySelector('#createAccount').addEventListener('click', () => {
    const navigate = onNavigate('/createAccount');
    rootDiv.innerHTML = navigate;
    /** ++++++++++++++++++++++++++++++++++ */
    document.querySelector('#btnSignin').addEventListener('click', () => {
      const email = document.querySelector('#emailCreateAccount').value;
      const password = document.querySelector('#passwordCreateAccount').value;
      funcCreateAccount(email, password);
      console.log(email + password);
    });
  });
  document.querySelector('#gmailIcon').addEventListener('click', authGoogle);
});
window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};
