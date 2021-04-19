import {configureStore, MiddlewareArray} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Authorization/saga';
import createReduxPromiseListener from 'redux-promise-listener';
import userReducer from './Authorization/userSlice';
import {asyncSubmissionMiddleware} from '../Utils/validation';

const sagaMiddleware = createSagaMiddleware();
const reduxPromiseListener = createReduxPromiseListener();

const a = reduxPromiseListener.middleware;
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
