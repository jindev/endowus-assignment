import { Store } from 'redux';

export interface CStore extends Store {
  runSaga?: any;
  close?: any;
}
