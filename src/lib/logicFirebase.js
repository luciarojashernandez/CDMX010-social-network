export const authentication = (provider) => {
  // Para acceder con una ventana emergente, llama a signInWithPopup
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
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
};

// eslint-disable-next-line max-len
export const funcCreateAccount = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);
// eslint-disable-next-line max-len
export const funcLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = (home) => {
  firebase.auth().signOut().then(() => {
    home();
  }).catch((error) => {
    console.log(error);
  });
};
