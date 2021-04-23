import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ColumnType} from '../types';

const store = (state: RootState) => state;
export const columnSelectors = {
  getAllColumns: () => createSelector(store, state => state.columns),
  getColumnById: (id: string) =>
    createSelector(store, state =>
      state.columns.filter((item: ColumnType) => {
        return item.id === id && item;
      }),
    ),
  getDataLoaded: () =>
    createSelector(store, state => state.userData.dataLoaded),
};
