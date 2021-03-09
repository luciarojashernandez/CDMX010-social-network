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

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
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
