import {fetchService} from '../../Utils';
import {put, takeEvery} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import {columnActions} from '.';
import {AxiosResponse} from 'axios';

function* createColumn({payload}: AnyAction) {
  const response: AxiosResponse = yield fetchService.createColumn(payload);
  yield put({type: columnActions.addColumn.type, payload: response.data});
}

function* editColumn({payload}: AnyAction) {
  const response: AxiosResponse = yield fetchService.editColumn(payload);
  yield put({
    type: columnActions.saveColumnChanges.type,
    payload: response.data,
  });
}

function* deleteColumn({payload}: AnyAction) {
  const response: AxiosResponse = yield fetchService.deleteColumn(payload);
}
export const columnsWatchers = [
  takeEvery(columnActions.createColumn.type, createColumn),
  takeEvery(columnActions.editColumn.type, editColumn),
  takeEvery(columnActions.deleteColumn.type, deleteColumn),
];
