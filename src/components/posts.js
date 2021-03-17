export const posts = `
<div id="postScreen">
<header class="menu">
      <img src="images/logo app2.png" class="logoMenu">
      <section class="iconHeader">
        <input type="image" id="alcaldiasIcon" class="alcaldiasIcon" src="images/alcaldias.png">
        <input type="image" id="btnSignOut" class="menuIcon" src="images/signoutIcon.png">
      </section>
</header>
<div id="containerPost"> 
    <select name="alcaldiasPost" class="input" id="alcaldiasPost">
        <option value="Álvaro Obregón">Álvaro Obregón</option>
        <option value="Azcapotzalco">Azcapotzalco</option>
        <option value="Benito Juárez">Benito Juárez</option>
        <option value="Coyoacán">Coyoacán</option>
        <option value="Cuajimalpa">Cuajimalpa</option>
        <option value="Cuauhtémoc">Cuauhtémoc</option>
        <option value="Gustavo A. Madero">Gustavo A. Madero</option>
        <option value="Iztacalco">Iztacalco</option>
        <option value="Iztapalapa">Iztapalapa</option>
        <option value="Magdalena Contreras">Magdalena Contreras</option>
        <option value="Miguel Hidalgo">Miguel Hidalgo</option>
        <option value="Milpa Alta">Milpa Alta</option>
        <option value="Tláhuac">Tláhuac</option>
        <option value="Tlalpan">Tlalpan</option>
        <option value="Venustiano Carranza">Venustiano Carranza</option>
        <option value="Xochimilco">Xochimilco</option>
      </select>
      <textarea id="post" class="textPost" placeholder="Escribe tu post"></textarea>
      <div class="btnContainer">
        <img src="images/imageIcon.png" class="imageIcon">
        <input type="button" id="toPost" class="toPost" value="PUBLICAR">
        <input type="button" id="toEdit" class="toPost" style="display:none" value="EDITAR">
      </div>
</div> 
</div> 
`;

export const newPost = (createPost) => {
  const post = document.querySelector('#post').value;
  const alcaldias = document.querySelector('#alcaldiasPost').value;
  const like = [];
  if (post !== '') {
    createPost(alcaldias, post, like);
  } else {
    // eslint-disable-next-line no-alert
    alert('Debes escribir un post antes de publicar');
  }
};

export const btnEditPost = (getPost, postId) => {
  document.querySelector('#toPost').style.display = 'none';
  document.querySelector('#toEdit').style.display = 'block';
  getPost(postId).then((post) => {
    const textPost = post.data();
    document.querySelector('#post').value = textPost.post;
    document.querySelector('#alcaldiasPost').value = textPost.alcaldias;
  });
};

export const updatePostDb = (editPost, postId) => {
  document.querySelector('#toPost').style.display = 'block';
  document.querySelector('#toEdit').style.display = 'none';
  const postValue = document.querySelector('#post').value;
  const alcaldiasValue = document.querySelector('#alcaldiasPost').value;
  if (postValue !== '') {
    editPost(postId, {
      post: postValue,
      alcaldias: alcaldiasValue,
    });
  } else {
    alert('Tu post está vacío');
  }
};
