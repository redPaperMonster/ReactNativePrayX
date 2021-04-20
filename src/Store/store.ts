import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootSaga, userReducer} from './Authorization/';
import createReduxPromiseListener from 'redux-promise-listener';
import {asyncSubmissionMiddleware} from '../Utils/validation';

const sagaMiddleware = createSagaMiddleware();
const reduxPromiseListener = createReduxPromiseListener();

export const store = configureStore({
  reducer: {
    userData: userReducer,
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
