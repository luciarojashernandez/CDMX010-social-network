import { home } from './components/home.js';
import { createAccount } from './components/createAccount.js';
import { feed } from './components/feed.js';
import { alcaldias } from './components/alcaldias.js';
import { posts } from './components/posts.js';

export const routers = {
  '/home': home,
  '/createAccount': createAccount,
  '/feed': feed,
  '/alcaldias': alcaldias,
  '/posts': posts,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  return routers[pathname];
};
