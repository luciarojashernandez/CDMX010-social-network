// Este es el punto de entrada de tu aplicacion
import { authGoogle } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';

let rootDiv;

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  document.querySelector('#signIn').addEventListener('click', () => {
    const navigate = onNavigate('/logInScreen');
    rootDiv.innerHTML = navigate;
  });
  document.querySelector('#gmailIcon').addEventListener('click', authGoogle);
});
// window.onpopstate = () => {
//   rootDiv.innerHTML = routers[window.location.pathname];
// };




// async function crearCuenta() {
//   const carga = await onNavigate('/logInScreen');

//   console.log(carga);
// }

// document.querySelector('#logIn').addEventListener('click', crearCuenta);

// window.onload = function () {
//   const botonprueba = document.querySelector('#logIn');
//   console.log(botonprueba);
// };
