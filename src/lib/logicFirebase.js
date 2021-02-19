export const authentication = (provider) => {
  // Para acceder con una ventana emergente, llama a signInWithPopup
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      console.log(credential);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(credential);
    });
};

export const signOut = () => {
  console.log('hola');
  firebase.auth().signOut().then(() => {
    console.log('salio');
  }).catch((error) => {
    console.log(error);
  });
};
