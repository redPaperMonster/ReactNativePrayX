import {fetchService, storageService} from '../../Utils';
import {put, takeEvery} from 'redux-saga/effects';
import {userActions, columnActions} from '../';
import {AnyAction} from 'redux';
import {AxiosResponse} from 'axios';

export function* signInSaga({payload}: AnyAction) {
  if (payload.data) {
    const {token, name} = payload.data;
    yield storageService.setToken(token);
    yield storageService.setName(name);
    yield put({type: userActions.setName.type, payload: name});
    yield put({type: userActions.setToken.type, payload: token});
    const columns: AxiosResponse<any> = yield fetchService.getColumns(token);
    yield put({type: columnActions.setColumns.type, payload: columns.data});
  }
}

export function* startApp() {
  const token: string = yield storageService.getToken();
  const name: string = yield storageService.getName();
  if (name) {
    yield put({type: userActions.setName.type, payload: name});
  }
  if (token) {
    yield put({type: userActions.setToken.type, payload: token});
    const columns: AxiosResponse<any> = yield fetchService.getColumns(token);
    yield put({type: columnActions.setColumns.type, payload: columns.data});
  }
  yield put({type: userActions.setDataLoaded.type, payload: true});
}

export function* logOutSaga() {
  yield storageService.setToken('');
  yield storageService.setName('');
  yield put({type: columnActions.clearStore.type});
}

export function* signUpSaga({payload}: AnyAction) {
  const {name, token} = yield fetchService.signUp({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });
  yield put({type: userActions.setName.type, payload: name});
  yield put({type: userActions.setToken.type, payload: token});
  yield storageService.setToken(token);
  yield storageService.setName(name);
}

export const authWatchers = [
  takeEvery(userActions.signUp, signUpSaga),
  takeEvery(userActions.signInSuccess.type, signInSaga),
  takeEvery(userActions.logOut.type, logOutSaga),
  startApp(),
];
