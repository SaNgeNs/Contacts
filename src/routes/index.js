import loadable from '@loadable/component';
import localeRegexp from 'Utils/localeRegexp';

const Main = loadable(() => import(/* webpackChunkName: "page_main" */'Pages/Main'));
const Favourite = loadable(() => import(/* webpackChunkName: "page_favourite" */'Pages/Favourite'));
const NotFound = loadable(() => import(/* webpackChunkName: "page_not_found" */'Pages/NotFound'));

const Routes = [
  {
    path: `/:locale(${localeRegexp})?`,
    exact: true,
    component: Main,
    name: 'main',
  },
  {
    path: `/:locale(${localeRegexp})?/favourite`,
    exact: true,
    component: Favourite,
    name: 'favourite',
  },
  {
    component: NotFound,
    name: 'notFound',
  },
];

export default Routes;
