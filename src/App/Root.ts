import RootDev from './Root.dev';
import RootProd from './Root.prod';

export default function getRoot() {
  if (process.env.NODE_ENV === 'production') {
    return RootProd;
  } else {
    return RootDev;
  }
}
