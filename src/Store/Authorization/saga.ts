import {API, storageService} from '../../Utils';
import {put, takeEvery, all} from 'redux-saga/effects';
import {userActions} from './userSlice';
import {AxiosResponse} from 'axios';
import {AnyAction} from 'redux';

export function* signInSaga({payload}: AnyAction) {
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

export function* signUpSaga({payload}: AnyAction) {
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

function* watchers() {
  yield takeEvery(userActions.signUp, signUpSaga);
  yield takeEvery(userActions.signInSuccess.type, signInSaga);
  yield takeEvery(userActions.logOut.type, logOutSaga);
}

export default function* rootSaga() {
  yield all([watchers(), startApp()]);
}
