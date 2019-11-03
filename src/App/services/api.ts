import axios from 'axios';
import { camelizeKeys } from 'humps';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

const getFullApi = (path: string) =>
  path.indexOf(API_ENDPOINT) === -1 ? API_ENDPOINT + path : path;

export const getApi = <T>(path: string, params?: any): Promise<T> => {
  const fullUrl = getFullApi(path);

  return axios
    .get(fullUrl, { params })
    .then((res) => camelizeKeys(res.data) as T);
};
