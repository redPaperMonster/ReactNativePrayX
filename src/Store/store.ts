import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {authWatchers, userReducer} from './Authorization/';
import createReduxPromiseListener from 'redux-promise-listener';
import {asyncSubmissionMiddleware} from '../Utils/validation';
import {columnReducer, columnsWatchers} from './Columns';
import {all} from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();
const reduxPromiseListener = createReduxPromiseListener();
function* rootSaga() {
  yield all([...columnsWatchers, ...authWatchers]);
}

export const store = configureStore({
  reducer: {
    userData: userReducer,
    columns: columnReducer,
  },
  middleware: [
    sagaMiddleware,
    reduxPromiseListener.middleware,
    asyncSubmissionMiddleware,
  ] as const,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export const promiseListener = reduxPromiseListener;
