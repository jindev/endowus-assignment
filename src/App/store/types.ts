import { Store } from 'redux';

export interface ICStore extends Store {
  runSaga?: any;
  close?: () => void;
}
