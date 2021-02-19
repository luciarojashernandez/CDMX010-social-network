import { home } from './components/home.js';
import { logInScreen } from './components/logInScreen.js';

export const routers = {
  '/': home,
  '/logInScreen': logInScreen,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  return routers[pathname];
};
