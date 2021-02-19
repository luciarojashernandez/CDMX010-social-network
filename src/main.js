// Este es el punto de entrada de tu aplicacion
import { authGoogle } from './lib/firebase.js';
import { routers } from './routers.js';

console.log(`data${routers}`);

window.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  console.log(`html${rootDiv}`);
});

window.addEventListener('click', () => {
  const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );
    rootDiv.innerHTML = routes[pathname];
  };
});

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

// document.querySelector("#gmailIcon").addEventListener("click", authGoogle);

// document.querySelector("#signOut").addEventListener("click", signOut);
