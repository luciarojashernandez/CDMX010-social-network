export const funcErrors = (error) => {
  const errorCode = error.code;

  switch (errorCode) {
    case 'auth/wrong-password':
      document.querySelector('.error').innerHTML = 'La contraseña es incorrecta';
      document.querySelector('.error').style.visibility = 'visible';
      break;
    case 'auth/invalid-email':
      document.querySelector('.error').innerHTML = 'El email es inválido';
      document.querySelector('.error').style.visibility = 'visible';
      break;
    case 'auth/email-already-in-use':
      document.querySelector('.error').innerHTML = 'El email ya está registrado';
      document.querySelector('.error').style.visibility = 'visible';
      break;
    case 'auth/argument-error':
      document.querySelector('.error').innerHTML = 'El correo no existe'; // el correo es corto
      document.querySelector('.error').style.visibility = 'visible';
      break;
    case 'auth/weak-password':
      document.querySelector('.error').innerHTML = 'La contraseña debe contener 6 o más caracteres';
      document.querySelector('.error').style.visibility = 'visible';
      break;
    default:
      document.querySelector('.error').innerHTML = 'El email es incorrecto';
      document.querySelector('.error').style.visibility = 'visible';
      break;
  }
};
