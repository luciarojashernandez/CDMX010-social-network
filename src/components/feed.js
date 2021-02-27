export const feed = `
    <div id="feedScreen">
        <header class="menu">
            <img src="images/logo app2.png" class="logoMenu">
            <ul class="menuItems">
            <li><a href="">Inicio</a></li>
            <li><a href="">Mi perfil</a></li>
            <li><a href="">Privacidad</a></li>
            <li><a href="">Cerrar sesión</a></li>
            </ul>
            <span class="btnMenu">
            <input type="image" id="alcaldiasIcon" class="menuIcon" src="images/alcaldias.png">
            <input type="image" id="menuIcon" class="menuIcon" src="images/menuIcon.png">
            </span>
        </header>
    <div>
    <input type="button" id="goPostScreen" class="orangeButton" value="CREAR NUEVO POST">
    <input type="image" id="profilePicture">
    <ul class="postData">
        <li>Nombre:</li>
        <li>Fecha:</li>
        <li>Ubicación</li>
    </ul>
    <div id="postContainer"></div>
    <input type="image" id="likeIcon" class="likeIcon" src="images/likeIcon.png">
    <input type="image" id="editIcon" class="editIcon" src="images/editIcon.png">
    <input type="image" id="deleteIcon" class="deleteIcon" src="images/deleteIcon.png">
    </div>
    </div>
    `;

export const buildPost = (printPost) => {
  const postbuid = printPost();
  console.log(`feed${postbuid}`);
  /* postBD.forEach((doc) => {
    console.log(doc.data());
  }); */
/*   window.addEventListener('DOMContentLoaded', () => {
    const postContainer = document.querySelector('#postContainer').value;
    postContainer.innerHTML += `
    <p>${postBD.data().post}</p>
    `;
  }); */
};
