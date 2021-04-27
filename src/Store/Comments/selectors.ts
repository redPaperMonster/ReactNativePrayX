import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const store = (state: RootState) => state;
export const commentSelectors = {
  getComments: () => createSelector(store, state => state.comments.data),
  getDataLoaded: () =>
    createSelector(store, state => state.comments.dataLoaded),
};
