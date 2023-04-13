import NowResto from '../views/pages/now-resto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import About from '../views/pages/about';

const routes = {
  '/': NowResto, // default page
  '/now-resto': NowResto,
  '/detail/:id': Detail,
  '/like': Like,
  '/about': About,
};

export default routes;
