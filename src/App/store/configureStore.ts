import configureStoreDev from './configureStore.dev';
import configureStore from './configureStore.prod';

export const getConfigureStore = () => {
  if (process.env.NODE_ENV === 'production') {
    return configureStore;
  } else {
    return configureStoreDev;
  }
};
