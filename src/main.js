// Este es el punto de entrada de tu aplicacion
import { authGoogle, authFacebook } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcCreateAccount, funcLogin } from './lib/logicFirebase.js';

let rootDiv = null;

// window.addEventListener('DOMContentLoaded', () => {
//   rootDiv = document.querySelector('#root');
//   rootDiv.innerHTML = routers[window.location.pathname];
//   document.querySelector('#createAccount').addEventListener('click', () => {
//     const navigate = onNavigate('/createAccount');
//     rootDiv.innerHTML = navigate;
//     /** ++++++++++++++++++++++++++++++++++ */
//     document.querySelector('#btnSignin').addEventListener('click', () => {
//       const email = document.querySelector('#emailCreateAccount').value;
//       const password = document.querySelector('#passwordCreateAccount').value;
//       funcCreateAccount(email, password);
//       console.log(email + password);
//     });
//   });

//   document.querySelector('#login').addEventListener('click', () => {
//     const email = document.querySelector('#emailLogin').value;
//     const password = document.querySelector('#passwordLogin').value;
//     funcLogin(email, password);
//   });

//   document.querySelector('#gmailIcon').addEventListener('click', authGoogle);

//   document.querySelector('#facebookIcon').addEventListener('click', authFacebook);
// });

// window.onpopstate = () => {
//   rootDiv.innerHTML = routers[window.location.pathname];
// };
const crearCuenta = () => {
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
};

const registrarme = () => {
  document.querySelector('#login').addEventListener('click', () => {
    const email = document.querySelector('#emailLogin').value;
    const password = document.querySelector('#passwordLogin').value;
    funcLogin(email, password);
  });
};

const gmail = () => {
  document.querySelector('#gmailIcon').addEventListener('click', authGoogle);
};

const facebook = () => {
  document.querySelector('#facebookIcon').addEventListener('click', authFacebook);
};

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  crearCuenta();
  registrarme();
  gmail();
  facebook();
});

window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};
