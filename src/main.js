import { authGoogle, authFacebook, createUser, createPost, printPost } from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcLogin, funcCreateAccount } from './lib/logicFirebase.js';
import { register } from './components/createAccount.js';
import { newPost } from './components/posts.js';
import { buildPost } from './components/feed.js';

let rootDiv = null;

const createAccountHome = () => {
  const navigate = onNavigate('/createAccount');
  rootDiv.innerHTML = navigate;
};

const feed = () => {
  const navigate = onNavigate('/feed');
  rootDiv.innerHTML = navigate;
};

const posts = () => {
  const navigate = onNavigate('/posts');
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
    switch (target.id) {
      case 'login':
        loginHome();
        feed();
        break;
      case 'createAccount':
        createAccountHome();
        break;
      case 'gmailIcon':
        loginGmail();
        feed();
        break;
      case 'facebookIcon':
        loginFacebook();
        feed();
        break;
      case 'btnSignin':
        register(funcCreateAccount, createUser);
        feed();
        break;
      case 'goPostScreen':
        posts();
        break;
      case 'toPost':
        newPost(createPost);
        feed();
        buildPost(printPost);
        break;
      default:
        break;
    }

/*     if (target.id === 'login') {
      loginHome();
      feed();
    } else if (target.id === 'createAccount') {
      createAccountHome();
    } else if (target.id === 'gmailIcon') {
      loginGmail();
      feed();
    } else if (target.id === 'facebookIcon') {
      loginFacebook();
      feed();
    } else if (target.id === 'btnSignin') {
      register(funcCreateAccount, createUser);
      feed();
    } */
  });
});

window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};
