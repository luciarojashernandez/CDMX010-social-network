import { authGoogle } from '../lib/firebase.js';

export const home = `
<div id="viewLoginScreen">
    <img src="images/logo app2.png" class="logo">
    <h1>INGRESAR</h1>
    <input type="email" id="emailLogin" class="input" placeholder="Email">
    <input type="password" id="passwordLogin" class="input" placeholder="Contraseña">
    <input type="button" id="login" class="btnLogin" value="INICIAR SESIÓN">
    <input type="button" id="createAccount" class="createAccount" value="CREAR CUENTA">
    <h2>o iniciar sesión con</h2>
    <input type="image" id="gmailIcon" class="gmailIcon" src="images/gmail.png">
    <input type="image" id="facebookIcon" class="facebookIcon" src="images/facebook.png">

    <input type="button" id="signOut" class="" value="CERRAR SESION">
  </div> 
`;
