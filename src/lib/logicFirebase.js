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

export const funcCreateAccount = (email, password) => {
  console.log("hola");
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });
};

export const funcLogin = (email, password, onNavigate, feed) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      feed();
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
// export const signOut = () => {
//   console.log('hola');
//   firebase.auth().signOut().then(() => {
//     console.log('salio');
//   }).catch((error) => {
//     console.log(error);
//   });
// };
