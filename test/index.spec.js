// importamos la funcion que vamos a testear
import { buildPost } from '../src/components/feed.js';

describe('build post', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  test('debería renderizar', async () => {
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
    //const firebase = { onGetPost };
    // console.log(onGetPost);
    await buildPost(onGetPost);
    expect(target.innerHTML).toMatchSnapshot();
  });
  // it('debería ser una función', () => {
  //   expect(typeof buildPost).toBe('function');
  // });
});
