import {
  authGoogle, authFacebook, createUser, createPost, deletePost, onGetPost, getPost, editPost,
} from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcLogin, funcCreateAccount } from './lib/logicFirebase.js';
import { register } from './components/createAccount.js';
import { newPost, btnEditPost, updatePostDb } from './components/posts.js';
import { buildPost, removePost } from './components/feed.js';
import { funcErrors } from './lib/errors.js';

let rootDiv = null;
let email = null;
let password = null;

const createAccountHome = () => {
  const navigate = onNavigate('/createAccount');
  rootDiv.innerHTML = navigate;
};

const feed = () => {
  const navigate = onNavigate('/feed');
  rootDiv.innerHTML = navigate;
  buildPost(onGetPost);
};

const posts = () => {
  const navigate = onNavigate('/posts');
  rootDiv.innerHTML = navigate;
};

const loginHome = () => {
  email = document.querySelector('#emailLogin').value;
  password = document.querySelector('#passwordLogin').value;
  funcLogin(email, password)
    .then((user) => {
      feed();
    })
    .catch((error) => {
      funcErrors(error);
    });
};

const loginGmail = () => {
  authGoogle(feed);
};

const loginFacebook = () => {
  authFacebook();
};

window.addEventListener('DOMContentLoaded', () => {
  let idUpdate = null;
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers[window.location.pathname];
  rootDiv.addEventListener('click', (event) => {
    const target = event.target;
    switch (target.id) {
      case 'login':
        loginHome();
        break;
      case 'createAccount':
        createAccountHome();
        break;
      case 'gmailIcon':
        loginGmail();
        // feed();
        break;
      case 'facebookIcon':
        loginFacebook();
        feed();
        break;
      case 'btnSignin':
        register(funcCreateAccount, createUser, feed, funcErrors);
        break;
      case 'goPostScreen':
        posts();
        break;
      case 'toPost':
        newPost(createPost);
        feed();
        break;
      case 'deleteIcon':
        removePost(deletePost, event.target.dataset.id);
        buildPost(onGetPost);
        break;
      case 'editIcon':
        posts();
        btnEditPost(getPost, event.target.dataset.id);
        idUpdate = event.target.dataset.id;
        break;
      case 'toEdit':
        updatePostDb(editPost, idUpdate);
        feed();
        break;
      // case 'cerrar':
      //   signOut();
      //   break;
      default:
        break;
    }
  });
});

window.onpopstate = () => {
  rootDiv.innerHTML = routers[window.location.pathname];
};
