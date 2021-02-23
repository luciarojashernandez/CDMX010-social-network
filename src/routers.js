import { home } from './components/home.js';
import { createAccount } from './components/createAccount.js';

export const routers = {
  '/': home,
  '/createAccount': createAccount,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  return routers[pathname];
};
