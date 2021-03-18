export const createAccount = `
<div id="createAccountScreen" class="container">
 <div class="logoForm">
    <img src="images/logo app2.png" class="logo">
  </div> 
  <div class="homeForm">
    <h1>CREA TU CUENTA</h1>
    <p id="errorMessage2" class="error" data-testid="errorMessage" style="visibility: hidden">ERROR</p>
    <input type="text" id="name" class="input" placeholder="Nombre">
    <input type="email" id="emailCreateAccount" class="input" placeholder="Email">
    <input type="password" id="passwordCreateAccount" class="input" placeholder="Contraseña">
    <select name="alcaldias" class="input" id="alcaldias">
      <option value="obregon">Álvaro Obregón</option>
      <option value="azcapo">Azcapotzalco</option>
      <option value="juarez">Benito Juárez</option>
      <option value="coyoacan">Coyoacán</option>
      <option value="cuajimalpa">Cuajimalpa</option>
      <option value="cuauhtemoc">Cuauhtémoc</option>
      <option value="madero">Gustavo A. Madero</option>
      <option value="iztacalco">Iztacalco</option>
      <option value="iztapalapa">Iztapalapa</option>
      <option value="magdalena">Magdalena Contreras</option>
      <option value="hidalgo">Miguel Hidalgo</option>
      <option value="milpaAlta">Milpa Alta</option>
      <option value="tlahuac">Tláhuac</option>
      <option value="tlalpan">Tlalpan</option>
      <option value="carranza">Venustiano Carranza</option>
      <option value="xochimilco">Xochimilco</option>
    </select>
    <input type="button" id="btnSignin" class="orangeButton" value="REGISTRARME">
  </div> 
  </div>
`;
export const register = (funcCreateAccount, createUser, feed, funcErrors) => {
  const email = document.querySelector('#emailCreateAccount').value;
  const password = document.querySelector('#passwordCreateAccount').value;
  funcCreateAccount(email, password)
    .then(() => {
      feed();
    })
    .catch((error) => {
      funcErrors(error);
    });
  createUser(email, password);
};
