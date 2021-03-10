import { authentication } from './logicFirebase.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtGImqGGVhvaAc6_Jet3sB_dFhrCtf0Q0',
  authDomain: 'social-network-sn8.firebaseapp.com',
  projectId: 'social-network-sn8',
  storageBucket: 'social-network-sn8.appspot.com',
  messagingSenderId: '747280353813',
  appId: '1:747280353813:web:4b8f99e5a4450c8fc5dc1c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dataBase = firebase.firestore();

export const authGoogle = (feed) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // console.log(result);
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      feed();
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
};

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  authentication(provider);
};

export const createUser = async (name, email, password, alcaldias) => {
  await dataBase.collection('users').doc().set({
    name,
    email,
    password,
    alcaldias,
  });
};

export const createPost = (post, alcaldias) => {
  dataBase.collection('postDB').doc().set({
    post,
    alcaldias,
  })
    .then(() => console.log('post creado con éxito'))
    .catch((error) => console.log(error));
};

// export const getPost = () => dataBase.collection('postDB').get();

export const deletePost = (id) => dataBase.collection('postDB').doc(id).delete();

export const onGetPost = (callback) => dataBase.collection('postDB').onSnapshot(callback);

export const getPost = (id) => dataBase.collection('postDB').doc(id).get();

export const editPost = (id, updatedPost) => dataBase.collection('postDB').doc(id).update(updatedPost);
