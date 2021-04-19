import {API, storageService} from '../../Utils';
import {put, takeEvery, all} from 'redux-saga/effects';
import {userActions} from './userSlice';
import {AxiosResponse} from 'axios';
import {SignUpPayload} from './types';

export function* signInWatcher() {
  yield takeEvery(userActions.signInSuccess.type, signInSaga);
}

export function* signInSaga({payload}: any) {
  if (payload.data) {
    const {token, name} = payload.data;
    yield storageService.setToken(token);
    yield storageService.setName(name);
    yield put({type: userActions.setName.type, payload: name});
    yield put({type: userActions.setToken.type, payload: token});
  }
}

export function* startApp() {
  const token: AxiosResponse = yield storageService.getToken();
  const name: AxiosResponse = yield storageService.getName();
  if (name) {
    yield put({type: userActions.setName.type, payload: name});
  }
  if (token) {
    yield put({type: userActions.setToken.type, payload: token});
  }
  yield put({type: userActions.setDataLoaded.type, payload: true});
}

export function* logOutSaga() {
  yield storageService.setToken('');
  yield storageService.setName('');
}

export function* logOutWatcher() {
  yield takeEvery(userActions.logOut.type, logOutSaga);
}

export function* signUpSaga(payload: SignUpPayload) {
  const {name, token} = yield API.signUp({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });
  yield put({type: userActions.setName.type, payload: name});
  yield put({type: userActions.setToken.type, payload: token});
  yield storageService.setToken(token);
  yield storageService.setName(name);
}

export function* registrationWatcher() {
  yield takeEvery(userActions.signUp.type, signUpSaga);
}

const watchers = [takeEvery(userActions.signUp, signUpSaga)];
export default function* rootSaga() {
  yield all([
    signInWatcher(),
    startApp(),
    logOutWatcher(),
    registrationWatcher(),
  ]);
}
