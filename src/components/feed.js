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
    <div id="postContainer"></div>
   <!-- <input type="image" id="profilePicture">
    <ul class="postData">
        <li>Nombre:</li>
        <li>Fecha:</li>
        <li>Ubicación</li>
    </ul>
    
    <input type="image" id="likeIcon" class="likeIcon" src="images/likeIcon.png">
    <input type="image" id="editIcon" class="editIcon" src="images/editIcon.png">
    <input type="image" id="deleteIcon" class="deleteIcon" src="images/deleteIcon.png"> -->
    </div>
    </div>
    `;

export const buildPost = async (onGetPost) => {
  const postContainer = document.querySelector('#postContainer');
  await onGetPost((postCollection) => {
    postContainer.innerHTML = '';
    // postCollection.then((doc) => {
    postCollection.forEach((element) => {
      const infoPost = element.data();
      infoPost.id = element.id;
      postContainer.innerHTML += `
  <!--       <input type="image" id="profilePicture">
        <ul class="postData">
            <li>Nombre:</li>
            <li>Fecha:</li>
            <li>Ubicación</li>
        </ul> -->
        <p>${infoPost.post}</p>
        <p>${infoPost.alcaldias}</p>
        <input type="image" id="likeIcon" class="likeIcon" src="images/likeIcon.png">
        <input type="image" id="editIcon" class="editIcon" src="images/editIcon.png">
        <input type="image" id="deleteIcon" class="deleteIcon btnDelete" data-id="${infoPost.id}" src="images/deleteIcon.png">
        `;
    });
    // });
  });
};

export const removePost = async (deletePost, event) => {
  await deletePost(event.target.dataset.id);
  /* const deletePostPromess = deletePost();
  deletePostPromess.then((doc) => {
    doc(event.target.dataset.id);
  }); */
};
