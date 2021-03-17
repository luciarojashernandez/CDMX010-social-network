export const authentication = (provider) => {
  // Para acceder con una ventana emergente, llama a signInWithPopup
  firebase
    .auth()
    .signInWithPopup(provider);
};

// eslint-disable-next-line max-len
export const funcCreateAccount = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// eslint-disable-next-line max-len
export const funcLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = (home) => {
  firebase.auth().signOut().then(() => {
    home();
  });
};
