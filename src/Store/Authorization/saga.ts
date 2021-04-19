import {API, AsyncAPI} from '../../Utils';
import {put, takeEvery, all} from 'redux-saga/effects';
import {userActions} from './userSlice';
import {AxiosResponse} from 'axios';

export function* signInWatcher() {
  yield takeEvery(userActions.signInSuccess.type, signInSaga);
}

export function* signInSaga({payload}: any) {
  if (payload.data) {
    yield AsyncAPI.setToken(payload.data.token);
    yield AsyncAPI.setName(payload.data.name);
    yield put({type: userActions.setName.type, payload: payload.data.name});
    yield put({type: userActions.setToken.type, payload: payload.data.token});
  }
}

export function* startApp() {
  const token: AxiosResponse = yield AsyncAPI.getToken();
  const name: AxiosResponse = yield AsyncAPI.getName();
  if (name) {
    yield put({type: userActions.setName.type, payload: name});
  }
  if (token) {
    yield put({type: userActions.setToken.type, payload: token});
  }
  yield put({type: userActions.setDataLoaded.type, payload: true});
}

export function* logOutSaga() {
  yield AsyncAPI.setToken('');
  yield AsyncAPI.setName('');
}

export function* logOutWatcher() {
  yield takeEvery(userActions.logOut.type, logOutSaga);
}

export function* signUpSaga({payload}: any) {
  const response: AxiosResponse = yield API.signUp(
    payload.name,
    payload.email,
    payload.password,
  );
  yield put({type: userActions.setName.type, payload: response.data.name});
  yield put({type: userActions.setToken.type, payload: response.data.token});
  yield AsyncAPI.setToken(response.data.token);
  yield AsyncAPI.setName(response.data.name);
}

export function* registrationWatcher() {
  yield takeEvery(userActions.signUp.type, signUpSaga);
}

export default function* rootSaga() {
  yield all([
    signInWatcher(),
    startApp(),
    logOutWatcher(),
    registrationWatcher(),
  ]);
}
