export const home = `
<div id="viewLoginScreen" class="container">
    <div class="logoForm">
      <img src="images/logo app2.png" class="logo">
    </div>
    <div class="homeForm">
    <h1>INGRESAR</h1>
    <p id="errorMessage" class="error" data-testid="errorMessage" style="visibility: hidden">ERROR</p>
    <input type="email" id="emailLogin" class="input" placeholder="Email">
    <input type="password" id="passwordLogin" class="input" placeholder="Contraseña">
    <input type="button" id="login" class="orangeButton" value="INICIAR SESIÓN">
    <input type="button" id="createAccount" class="orangeButton" value="CREAR CUENTA">
    </div>
    <div class="snForm">
    <h2>o iniciar sesión con</h2>
    <section class="iconSnForm">
      <input type="image" id="gmailIcon" class="gmailIcon" src="images/gmail.png">
      <input type="image" id="facebookIcon" class="facebookIcon" src="images/facebook.png">
    </section>
    </div>
  </div> 
`;
