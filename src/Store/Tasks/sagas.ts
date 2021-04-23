import {fetchService} from '../../Utils';
import {put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {AnyAction} from 'redux';
import {taskActions} from './tasksSlice';

function* createTask({payload}: AnyAction) {
  const {data}: AxiosResponse = yield fetchService.createTask(
    payload.task,
    payload.columnId,
  );
  yield put({type: taskActions.addTask.type, payload: data});
}

function* getTasks({payload}: AnyAction) {
  const tasks: AxiosResponse<any> = yield fetchService.getTasks();
  yield put({type: taskActions.setTasks.type, payload: tasks.data});
  yield put({type: taskActions.setDataLoaded.type, payload: true});
}

function* deleteTask({payload}: AnyAction) {
  yield fetchService.deleteTask(payload);
}

function* editTask({payload}: AnyAction) {
  const {data}: AxiosResponse = yield fetchService.editTask(
    payload.task,
    payload.id,
  );
  yield put({type: taskActions.saveTaskChanges.type, payload: data});
}

export const tasksWatchers = [
  takeEvery(taskActions.createTask.type, createTask),
  takeEvery(taskActions.deleteTask.type, deleteTask),
  takeEvery(taskActions.editTask.type, editTask),
  takeEvery(taskActions.loadData.type, getTasks),
];
