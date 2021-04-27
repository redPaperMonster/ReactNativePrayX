import {commentsSchema, fetchService, createCommentSchema} from '../../Utils';
import {put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {AnyAction} from 'redux';
import {commentActions} from './commentSlice';
import {normalize} from 'normalizr';

function* getComments({payload}: AnyAction) {
  const comments: AxiosResponse<any> = yield fetchService.getComments();
  const normalizedData = normalize(comments.data, commentsSchema);
  console.log(`normalizedData`, normalizedData);

  yield put({type: commentActions.setDataLoaded.type, payload: true});
  yield put({
    type: commentActions.setComments.type,
    payload: comments.data,
  });
}

function* deleteComment({payload}: AnyAction) {
  yield fetchService.deleteComment(payload);
}

function* createComment({payload}: AnyAction) {
  const response: AxiosResponse<any> = yield fetchService.createComment(
    payload,
  );
  const normalizedData = normalize(response.data, createCommentSchema);
  console.log(`createCommentNormalizedData`, normalizedData);
  yield put({
    type: commentActions.addComment.type,
    payload: normalizedData,
  });
}

function* editComment({payload}: AnyAction) {
  const response: AxiosResponse = yield fetchService.editComment(payload);
  yield put({
    type: commentActions.saveChanges.type,
    payload: response.data,
  });
}
export const commentsWatchers = [
  takeEvery(commentActions.loadData.type, getComments),
  takeEvery(commentActions.deleteComment.type, deleteComment),
  takeEvery(commentActions.createComment.type, createComment),
  takeEvery(commentActions.editComment.type, editComment),
];
