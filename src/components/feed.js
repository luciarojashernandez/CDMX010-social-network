export const feed = `
<div id="feedScreen" class="container2">
  <header class="menu">
      <img src="images/logo app2.png" class="logoMenu">
      <section class="iconHeader">
        <input type="image" id="alcaldiasIcon" class="alcaldiasIcon" src="images/alcaldias.png">
        <input type="image" id="menuIcon" class="menuIcon" src="images/menuIcon.png">
      </section>
  </header>
  <div id="btnPost">
    <input type="button" id="goPostScreen" class="orangeButton" value="CREAR NUEVO POST">
    </div>
  <div id="postContainer" class="postContainer"></div>
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
      <div class="singlePost">
  <!--       <input type="image" id="profilePicture">
        <ul class="postData">
            <li>Nombre:</li>
            <li>Fecha:</li>
            <li>Ubicación</li>
        </ul> -->
        <p>${infoPost.post}</p>
        <p>${infoPost.alcaldias}</p>
        <input type="image" id="likeIcon" class="likeIcon" src="images/likeIcon.png">
        <input type="image" id="editIcon" class="editIcon btnEdit" data-id="${infoPost.id}" src="images/editIcon.png">
        <input type="image" id="deleteIcon" class="deleteIcon btnDelete" data-id="${infoPost.id}" src="images/deleteIcon.png">
      </div>
        `;
    });
    // });
  });
};

export const removePost = /* async */ (deletePost, postId) => {
  // await deletePost(postId);
  deletePost(postId).then(() => {
    console.log(`post${postId}borrado con exito`);
  });
};
