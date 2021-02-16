// aqui exportaras las funciones que necesites

 export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
}; 

export const authentication = (provider) => {
  //Para acceder con una ventana emergente, llama a signInWithPopup
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        console.log(credential);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
      });
  };
