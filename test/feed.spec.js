// importamos la funcion que vamos a testear
import { buildPost, removePost } from '../src/components/feed.js';

describe('feed test', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  test('debería renderizar buildPost', async () => {
    const target = document.getElementById('root');
    const postDB = [
      {
        alcaldias: 'obregon',
        id: 'G6cHwWgAOGnfidMokUeJ',
        like: '["susana23@gmail.com"]',
        post: 'hola',
      },
    ];
    const onGetPost = jest.fn().mockImplementation(() => Promise.resolve(postDB));
    // const firebase = { onGetPost };
    await buildPost(onGetPost);
    expect(target.innerHTML).toMatchSnapshot();
  });

  test('removePost debería eliminar un post', async () => {
    const target = document.getElementById('root');
    const postDB = [
      {
        alcaldias: 'obregon',
        id: 'G6cHwWgAOGnfidMokUeJ',
        like: '["susana23@gmail.com"]',
        post: 'hola',
      },
      {
        alcaldias: 'iztacalco',
        id: 'ZRlmWqNuzOeyUxYBPGcv',
        like: '["hola@gmail.com"]',
        post: 'gorditas de chicharron',
      },
    ];
    const deletePost = jest.fn().mockImplementation(() => Promise.resolve(postDB));
    await removePost(deletePost, 'G6cHwWgAOGnfidMokUeJ');
    expect(target.innerHTML).toMatchSnapshot();
  });

  // it('debería ser una función', () => {
  //   expect(typeof buildPost).toBe('function');
  // });
});
