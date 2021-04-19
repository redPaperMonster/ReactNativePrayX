import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const store = (state: RootState) => state;
export const userSelectors = {
  getUserName: () => createSelector(store, state => state.userData.name),
  getToken: () => createSelector(store, state => state.userData.token),
  getDataLoaded: () =>
    createSelector(store, state => state.userData.dataLoaded),
};
