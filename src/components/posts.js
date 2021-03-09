export const posts = `
<div id="postScreen">
<header class="menu">
      <img src="images/logo app2.png" class="logoMenu">
      <section class="iconHeader">
        <input type="image" id="alcaldiasIcon" class="alcaldiasIcon" src="images/alcaldias.png">
        <input type="image" id="menuIcon" class="menuIcon" src="images/menuIcon.png">
      </section>
  </header>
  <textarea id="post" class="textPost" placeholder="Escribe tu post"></textarea>
<img src="images/imageIcon.png" class="imageIcon">
<select name="alcaldiasPost" class="input" id="alcaldiasPost">
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
<input type="button" id="toPost" class="toPost" value="PUBLICAR">
<input type="button" id="toEdit" class="toPost" style="display:none" value="EDITAR">
</div> 
`;

export const newPost = (createPost) => {
  const post = document.querySelector('#post').value;
  const alcaldias = document.querySelector('#alcaldiasPost').value;
  if (post !== '') {
    createPost(post, alcaldias);
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
    }).then(() => {
    });
  } else {
    alert('Tu post está vacío');
  }
};
