import {
  authGoogle, authFacebook, createUser, createPost, deletePost, onGetPost, getPost, editPost,
} from './lib/firebase.js';
import { routers, onNavigate } from './routers.js';
import { funcLogin, funcCreateAccount, signOut } from './lib/logicFirebase.js';
import { register } from './components/createAccount.js';
import { newPost, btnEditPost, updatePostDb } from './components/posts.js';
import { buildPost, removePost, funcLike } from './components/feed.js';
import { funcErrors } from './lib/errors.js';

let rootDiv = null;
let email = null;
let password = null;

const home = () => {
  rootDiv = document.querySelector('#root');
  rootDiv.innerHTML = routers['/home'];
};

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
      localStorage.setItem('emailStorage', user.user.email);
    })
    .catch((error) => {
      funcErrors(error);
    });
};

const loginGmail = () => {
  authGoogle(feed);
};

const loginFacebook = () => {
  authFacebook(feed);
};

window.addEventListener('DOMContentLoaded', () => {
  let idUpdate = null;
  home();
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
        break;
      case 'facebookIcon':
        loginFacebook();
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
      case 'btnSignOut':
        signOut(home);
        break;
      case 'likeIcon':
        funcLike(event.target.dataset.id, getPost, editPost);
        break;
      default:
        break;
    }
  });
});

// window.onpopstate = () => {
//   rootDiv.innerHTML = routers[window.location.pathname];
// };
