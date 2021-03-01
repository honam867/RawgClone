import { CHANGE_ROUTE } from '../constants/ActionTypes';
import { parseRoute } from '../utils/RouterUtils';

export const changeRoute = route => ({
  type: CHANGE_ROUTE,
  payload: { route }
});

export const initRouter = paths => dispatch => {
  const hash = window.location.hash ? window.location.hash.slice(1) : '';
  console.log('🚀 ~ file: RouterAction.js ~ line 11 ~ hash', hash);
  const [pathname, search] = hash.split('?');
  const route = parseRoute(paths, pathname, search);
  dispatch(changeRoute(route));
};
