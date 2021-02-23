// Este es el punto de entrada de tu aplicacion
import { authGoogle } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';

let rootDiv = null;

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  document.querySelector('#createAccount').addEventListener('click', () => {
    const navigate = onNavigate('/createAccount');
    rootDiv.innerHTML = navigate;
    /** ++++++++++++++++++++++++++++++++++ */
    document.querySelector('#btnSignin').addEventListener('click', () => {
      console.log('hola');
    });
  });
  document.querySelector('#gmailIcon').addEventListener('click', authGoogle);
});
window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};